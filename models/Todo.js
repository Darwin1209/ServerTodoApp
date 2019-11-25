const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    todo: {
        type: Array,
        required: true
    }
})

module.exports = model('users', schema);