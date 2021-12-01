const router = require('express').Router();

// JWT verification
const {
  verifyToken,
  verifyTokenAndAuthorization,
} = require('../controllers/verifyToken');

// Cart callback functions
const { createCart, updateCart } = require('../controllers/cart');

// CREATE
router.post('/', verifyToken, createCart);

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateCart);

module.exports = router;
