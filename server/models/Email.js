const mongoose = require('mongoose');

const EmailSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Email', EmailSchema);