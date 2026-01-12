const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  getCategories
} = require('../controllers/productController');

// Public product routes
router.get('/', getAllProducts);           // GET /api/products
router.get('/categories', getCategories);  // GET /api/products/categories  
router.get('/:id', getProductById);        // GET /api/products/:id

module.exports = router;
