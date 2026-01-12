const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Satellite Components', 'Sensors', 'Research Instruments', 'Communication Systems', 'Power Systems']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price cannot be negative']
  },
  image: {
    type: String,
    default: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800'
  },
  specifications: {
    weight: String,
    dimensions: String,
    material: String,
    compatibility: String,
    powerRequirement: String,
    operatingTemp: String,
    additionalInfo: String
  },
  stock: {
    type: Number,
    required: true,
    default: 0,
    min: [0, 'Stock cannot be negative']
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

productSchema.pre('save', function(next) {
  this.inStock = this.stock > 0;
  next();
});

module.exports = mongoose.model('Product', productSchema);
