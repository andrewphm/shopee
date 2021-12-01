const User = require('../models/User');

const bcrypt = require('bcrypt');

// Update user
const updateUser = async (req, res) => {
  if (req.body.hashedPassword) {
    req.body.hashedPassword = await bcrypt.hash(req.body.hashedPassword, 10);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { updateUser };
