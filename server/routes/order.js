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
  getUserOrders,
  getAllOrders,
  getMonthlyIncome,
} = require('../controllers/order');

// CREATE
router.post('/', verifyToken, createOrder);

// UPDATE
router.put('/:id', verifyTokenAndAdmin, updateOrder);

// DELETE
router.delete('/:id', verifyTokenAndAdmin, deleteOrder);

// GET All Orders
router.get('/', verifyTokenAndAdmin, getAllOrders);

// GET User Orders
router.get('/:id', verifyTokenAndAuthorization, getUserOrders);

// GET Monthly Income
router.get('/income', verifyTokenAndAdmin, getMonthlyIncome);

module.exports = router;
