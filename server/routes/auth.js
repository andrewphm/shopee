const router = require('express').Router();

const { register, signin } = require('../controllers/auth');

// REGISTER
router.post('/register', register);
router.post('/signin', signin);
module.exports = router;
