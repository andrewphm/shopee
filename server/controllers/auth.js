// Mongo DB schema
const User = require('../models/User');

// encrypt password
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, isAdmin } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      isAdmin,
      username,
      email,
      firstName,
      lastName,
      hashedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

const signin = async (req, res) => {};

module.exports = { register, signin };
