// Mongo DB schema
const User = require('../models/User');

// encrypt password
const bcrypt = require('bcrypt');

// jwt
const jwt = require('jsonwebtoken');

// REGISTER
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

//SIGN IN
const signin = async (req, res) => {
  try {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ username });
      const success = await bcrypt.compare(password, user.hashedPassword);

      if (success) {
        const accessToken = jwt.sign(
          {
            id: user._id,
            isAdmin: user.isAdmin,
          },
          process.env.JWT_SEC,
          { expiresIn: '3d' }
        );
        const { hashedPassword, ...others } = user._doc;

        res.status(200).json({ ...others, accessToken });
      } else {
        res.status(401).json('Incorrect password');
      }
    } catch (error) {
      res.status(401).json('No User');
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { register, signin };
