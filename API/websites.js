const router = require('express').Router();

const {
    getWebsite,
    getWebsites,
    addWebsite,
    updateWebsite,
    removeWebsite
} = require('../controllers/websites.controller');

router.get('/', getWebsites);

router.get('/:id', getWebsite);

router.post('/add', addWebsite);

router.patch('/update/:id', updateWebsite);

router.delete('/remove/:id', removeWebsite);

module.exports = router;