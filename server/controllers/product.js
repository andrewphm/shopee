// Mongo DB schema
const Product = require('../models/Product');

// CREATE

const createProduct = async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateProduct = async (req, res) => {};
const deleteProduct = async (req, res) => {};

module.exports = { createProduct, updateProduct, deleteProduct };
