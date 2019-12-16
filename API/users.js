const router = require('express').Router();

const { login, register, unRegister, test } = require('../controllers/users.controller');

router.get('/', test);

router.post('/login', login);

router.post('/register', register);

router.delete('/unregister/:id', unRegister);

module.exports = router;