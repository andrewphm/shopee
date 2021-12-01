const router = require('express').Router();

// JWT verification
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../controllers/verifyToken');

// Cart callback functions
const {
  createCart,
  updateCart,
  getUserCart,
  deleteCart,
  getAllCarts,
} = require('../controllers/cart');

// CREATE
router.post('/', verifyToken, createCart);

// UPDATE
router.put('/:id', verifyTokenAndAuthorization, updateCart);

// DELETE
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);

// GET All carts
router.get('/', verifyTokenAndAdmin, getAllCarts);

// GET User Cart
router.get('/:id', verifyTokenAndAuthorization, getUserCart);

module.exports = router;
