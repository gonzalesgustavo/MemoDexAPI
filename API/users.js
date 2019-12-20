const router = require('express').Router();

const Auth = require('../auth');

const { login, register, unRegister, test } = require('../controllers/users.controller');

router.get('/', test);

router.post('/login', login);

router.post('/register', register);

router.delete('/unregister/:id', Auth.audit, unRegister);

module.exports = router;