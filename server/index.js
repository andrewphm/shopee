const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user');
const { application } = require('express');

dotenv.config();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err));

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoute);

app.listen(process.env.PORT || 5000, () => console.log('Server started'));
