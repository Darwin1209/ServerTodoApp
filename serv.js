const express = require('express');
const logger = require('morgan');
const fs = require('fs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const TodoData = require('./models/Todo');
const string = require('./config.js');
const PORT = process.env.PORT || 3001

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.delete('/delete', async (req,res) => {
    let { name, idTast } = req.body;
    let user = await TodoData.findOne({ name: name });
    user.todo = user.todo.filter(el => el.id !== idTast);
    user.save(function (err) {
        if (err) return handleError(err);
    })
    res.json(user.todo);
});

app.post('/todoSet', async (req, res) => {
    let { name, task } = req.body;
    let user = await TodoData.findOne({ name: name });
    user.todo.push(task);
    await user.save(function (err) {
        if (err) return handleError(err);
    });
    res.json(user.todo);
})

app.put('/toogle', async (req, res) => {
    let { name, idTast, proper } = req.body;
    let user = await TodoData.findOne({ name: name });
    for (let i = 0; i < user.todo.length; i++) {
        if (user.todo[i].id === idTast) {
            if(user.todo[i][proper]) {
                user.todo[i][proper] = false;
            } else {
                user.todo[i][proper] = true;
            }
            user.markModified('todo');
            await user.save(function (err) {
                if (err) return handleError(err);
            });
            break;
        }
    }
    
    res.json(user.todo);
})

app.post('/verificate', async (req, res) => {
    let { login, password } = req.body;
    let user = await TodoData.findOne({ name: login });
    if (user === null) return res.json({status: "NO_USER"});
    if (user.password === password) {
        return res.json({status: "OK"});
    } else {
        return res.json({status: "INVALID_PASSWORD"});
    }
})

app.post('/registration', async (req, res) => {
    let { login, password } = req.body;
    let users = await TodoData.findOne({ name: login });
    if (users !== null) {
        return res.json({status: "LOGIN"})
    }
    const user = new TodoData({
        'name': login, 
        'password': password, 
        'todo' : [], 
    })

    await user.save();
    res.json({status: 'OK'});
})
 
app.post('/todoGet', async function (req, res) {
    let { name } = req.body;
    const todos = await TodoData.findOne({ "name": name });
    res.send(JSON.stringify(todos.todo));
})

async function start() {
    try {
        await mongoose.connect(
            string, 
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useUnifiedTopology: true
            }
        )
        app.listen(PORT, function() {
            console.log("Server is running")
        })
    } catch (e) {
        console.log(e);
    }
}

start();
