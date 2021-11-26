const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err));

const app = express();
app.listen(5000, () => console.log('Server started'));
