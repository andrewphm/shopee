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

// DELETE

module.exports = router;
