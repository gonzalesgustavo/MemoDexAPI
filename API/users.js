const router = require('express').Router();

const { login, register, unRegister } = require('../controllers/users.controller');

router.post('/login', login);

router.post('/register', register);

router.delete('/unregister', unRegister);

module.exports = router;