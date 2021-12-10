const Email = require('../models/Email');

const createEmail = async (req, res) => {
  const newEmail = new Email(req.body);

  try {
    await newEmail.save();
    res.status(200).json('saved email');
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { createEmail };
