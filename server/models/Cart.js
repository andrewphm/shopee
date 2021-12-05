const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: { type: Array, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cart', CartSchema);
