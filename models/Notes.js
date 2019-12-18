const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return today;
}

const NoteSchema = new Schema({
    text: {
        type: String,
        min: 3,
        required: true
    },
    date: {
        type: String,
        default: getDate()
    }
});

module.exports = mongoose.model('Note', NoteSchema);