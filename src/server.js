require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Import all routes
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Create express app
const app = express();

// Connect to MongoDB
connectDB();

// CORS configuration for deployment
app.use(cors({
  origin: '*',  // ✅ Allow ALL origins
  credentials: false,  // Must be false when origin is '*'
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'x-admin-key', 'Authorization']
}));

// Essential middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// API Routes (All start with /api/)
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes); 
app.use('/api/admin', adminRoutes);

// Root route
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: '🚀 Space Research Equipment Marketplace API',
    version: '1.0.0',
    endpoints: {
      products: '/api/products',
      orders: '/api/orders',
      admin: '/api/admin',
      health: '/api/health'
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: '🚀 Space Research Equipment Marketplace API is running!',
    timestamp: new Date().toISOString(),
    mongodb: !!require('mongoose').connection.readyState
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

// Error handling middleware (must be last)
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║  SPACE RESEARCH EQUIPMENT MARKETPLACE API              ║
║  Server running on port ${PORT}                        ║
║  Health check: /api/health                             ║
║  Environment: ${process.env.NODE_ENV || 'development'}                      ║
╚════════════════════════════════════════════════════════╝
  `);
});

module.exports = app;
