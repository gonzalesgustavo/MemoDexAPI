const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: {
        type: String,
        min: 2,
        max: 20,
        required: true
    },
    lastName: {
        type: String,
        min: 2,
        max: 20,
        required: true
    },
    relationship: {
        type: String,
        min: 2,
        max: 20,
    },
    notes: {
        type: String,
        max: 120
    },
    contact: {
        email: {
            type: String,
            min: 10,
            max: 50
        },
        mobile: {
            type: String,
            max: 25
        },
        work: {
            type: String,
            max: 25
        },
        home: {
            type: String,
            max: 25
        },
        twitter: {
            type: String,
            max: 15
        },
        facebook: {
            type: String,
            max: 20
        },
        linkedin: {
            type: String,
            max: 20
        },
        instagram: {
            type: String,
            max: 15
        },
        website: {
            type: String,
            max: 100
        }
    }
});

module.exports = mongoose.model('Contact', ContactSchema);