const router = require('express').Router();
const Auth = require('../auth');

const {
    getWebsite,
    getWebsites,
    addWebsite,
    updateWebsite,
    removeWebsite
} = require('../controllers/websites.controller');

router.get('/:id', Auth.audit, getWebsites);

router.get('/website/:id', Auth.audit, getWebsite);

router.post('/add', Auth.audit, addWebsite);

router.patch('/update/:id', Auth.audit, updateWebsite);

router.delete('/remove/:id', Auth.audit, removeWebsite);

module.exports = router;