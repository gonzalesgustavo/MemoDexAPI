const router = require('express').Router();

const {
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
} = require('../controllers/notes.controller');

router.get('/', getNotes);

router.get('/:id', getNote);

router.post('/add', addNote);

router.patch('/update/:id', updateNote);

router.delete('/remove/:id', removeNote);

module.exports = router; 