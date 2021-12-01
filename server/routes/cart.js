const router = require('express').Router();

// JWT verification
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../controllers/verifyToken');

// Cart callback functions
const { createCart } = require('../controllers/cart');

router.post('/', verifyToken, createCart);

module.exports = router;
