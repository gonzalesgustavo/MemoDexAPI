const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    text: {
        type: String,
        min: 3,
        required: true
    },
    date: Date.now,
    tags: Array
});

module.exports = mongoose.model('Note', NoteSchema);