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
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.json(500).json('Could not update order');
  }
};

// DELETE Order
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json('Deleted order');
  } catch (error) {
    res.status(500).json('Could not delete order');
  }
};

// GET User Order
const getUserOrders = async (req, res) => {
  try {
    const orders = Order.find({ userId: req.params.id });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json(error);
  }
};

// GET All Orders
const getAllOrders = async (req, res) => {
  let orders;

  try {
  } catch (error) {
    res.status(500).json('Could not get orders..');
  }
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
};
