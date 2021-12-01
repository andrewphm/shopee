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
router.put('/:id', verifyTokenAndAuthorization, deleteCart);

// GET User Cart
router.get('/find/:userId', verifyTokenAndAuthorization, getUserCart);

router.get('/', verifyTokenAndAdmin, getAllCarts);

module.exports = router;
