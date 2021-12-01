const User = require('../models/User');

const bcrypt = require('bcrypt');

// UPDATE User
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

// DELETE User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User has been deleted...');
  } catch (error) {
    res.status(500).json('No user found to be deleted');
  }
};

// GET User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { hashedPassword, ...others } = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json('No User found');
  }
};

// GET All users

const getAllUsers = async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (error) {}
};

// GET User stats

const getUserStats = async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

  console.log(lastYear);
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: {
            $month: '$createdAt',
          },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { updateUser, deleteUser, getUser, getAllUsers, getUserStats };
