const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const carteRoute = require('./routes/cart');
dotenv.config();

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('DB connected!'))
  .catch((err) => console.error(err));

const app = express();

app.use(cors());
app.use(express.json());

// CRUD routes for users
app.use('/api/users', userRoute);

// CRUD routes for products
app.use('/api/products', productRoute);

// CRUD routes for cart
app.use('/api/carts/');

// Login and Register routes
app.use('/api/auth', authRoute);

app.listen(process.env.PORT || 5000, () => console.log('Server started'));
