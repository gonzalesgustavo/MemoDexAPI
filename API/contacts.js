const router = require('express').Router();
const Auth = require('../auth');

const {
    getContact,
    getContacts,
    addContact,
    updateContact,
    removeContact
} = require('../controllers/contacts.controller');


router.get('/', Auth.audit, getContacts);

router.get('/:id', Auth.audit, getContact);

router.post('/add', Auth.audit, addContact);

router.patch('/update/:id', Auth.audit, updateContact);

router.delete('/remove/:id', Auth.audit, removeContact);

module.exports = router; 