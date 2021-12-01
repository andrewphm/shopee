const router = require('express').Router();

// JWT Verification
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../controllers/verifyToken');

// Order controllers
const {
  createOrder,
  deleteOrder,
  updateOrder,
  getUserOrder,
  getAllOrders,
} = require('../controllers/order');

// CREATE
router.post('/', verifyToken, createOrder);

// UPDATE
router.put('/:id', verifyTokenAndAdmin, updateOrder);

// DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

// GET All Orders
router.get('/', verifyTokenAndAdmin, getAllOrders);

// GET User Order
router.get('/:id', verifyTokenAndAuthorization, getUserOrder);

module.exports = router;
