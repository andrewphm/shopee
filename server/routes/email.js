const router = require('express').Router();

const { createEmail } = require('../controllers/email');

router.post('/', createEmail);

module.exports = router;
