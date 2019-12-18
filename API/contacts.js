const router = require('express').Router();

const {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
} = require('../controllers/contacts.controller');

router.get('/', getContacts);

router.get('/:id', getContact);

router.post('/add', addContact);

router.patch('/update/:id', updateContact);

router.delete('/remove/:id', removeContact);

module.exports = router; 