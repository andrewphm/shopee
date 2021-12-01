const router = require('express').Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../controllers/verifyToken');

const { updateUser } = require('../controllers/user');

router.put('/:id', verifyTokenAndAuthorization, updateUser);

module.exports = router;
