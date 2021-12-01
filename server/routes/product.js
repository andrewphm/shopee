const router = require('express').Router();

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('../controllers/verifyToken');

const {
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/product');

// CREATE product
router.post('/', verifyTokenAndAdmin, createProduct);

// UPDATE product
router.put('/:id', verifyTokenAndAdmin, updateProduct);

// Delete Product
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);

module.exports = router;
