const Cart = require('../models/Cart');

// CREATE Cart
const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

// UPDATE Cart
const updateCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    const cartId = cart._id;

    const updatedCart = await Cart.findByIdAndUpdate(
      cartId,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json('Could not update cart');
  }
};

// DELETE Cart
const deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    const cartId = cart._id;

    await Cart.findByIdAndDelete(cartId);
    res.status(200).json('Cart has been deleted');
  } catch (error) {
    res.status(500).json('Could not delete cart');
  }
};

// GET User Cart
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.id });
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json('Could not find cart');
  }
};

//GET All Carts
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json('Could not get carts');
  }
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
};
