const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const { createProduct } = require('../controllers/productController');
const { getAllOrders } = require('../controllers/orderController');

// Apply admin auth to all routes
router.use(adminAuth);

// Admin-only routes
router.post('/products', createProduct);   // POST /api/admin/products
router.get('/orders', getAllOrders);       // GET /api/admin/orders

module.exports = router;
