const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebsitesSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    url: {
        type: String,
        min: 3,
        unique: true,
        required: true
    },
    shopType: String,
    emailUsed: {
        type: String,
        min: 5
    },
    usernameUsed: String,
    pwdHint: String
});

module.exports = mongoose.model('Websites', WebsitesSchema);