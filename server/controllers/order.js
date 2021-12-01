// MongoDB schema
const Order = require('../models/Order');

// CREATE Order
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json('Could not create order');
  }
};
// UPDATE Order
const updateOrder = async (req, res) => {};
// DELETE Order
const deleteOrder = async (req, res) => {};
// GET User Order
const getUserOrder = async (req, res) => {};
// GET All Orders
const getAllOrders = async (req, res) => {};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrder,
  getAllOrders,
};
