const Email = require('../models/Email');

const createEmail = (req, res) => {
  const newEmail = new Email(req.body);

  try {
  } catch (error) {}
};

module.exports = { createEmail };
