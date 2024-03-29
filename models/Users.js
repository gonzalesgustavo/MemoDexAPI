const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        min: 3,
        required: true
    },
    email: {
        type: String,
        min: 10,
        required: true,
        unique: true,
        match: /^[A-Za-z0-9][0-9\.\-\_\/+@[A-Za-z0-9]+\.[A-Za-z0-9]+$/
    },
    username: {
        type: String,
        required: true,
        unique: true,
        min: 5
    },
    password: {
        type: String,
        min: 5,
        required: true
    }
});

module.exports = mongoose.model('Users', UserSchema);