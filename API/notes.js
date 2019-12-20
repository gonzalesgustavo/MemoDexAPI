const router = require('express').Router();
const Auth = require('../auth');

const {
    getNote,
    getNotes,
    addNote,
    updateNote,
    removeNote
} = require('../controllers/notes.controller');

router.get('/', Auth.audit, getNotes);

router.get('/:id', Auth.audit, getNote);

router.post('/add', Auth.audit, addNote);

router.patch('/update/:id', Auth.audit, updateNote);

router.delete('/remove/:id', Auth.audit, removeNote);

module.exports = router; 