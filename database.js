const mongoose = require('mongoose');

module.exports = () => {
    return new Promise ((resolve, reject) => {
        mongoose.Promise = global.Promise;
        mongoose.set('debug', true);
    })
}