const express = require('express');
const router = express.Router();
const {
  createOrder
} = require('../controllers/orderController');

// Public order routes
router.post('/', createOrder);             // POST /api/orders

module.exports = router;
