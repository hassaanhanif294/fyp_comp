const mongoose = require('mongoose');

const productDetailsSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Unisex'],
    required: true
  },
  event: {
    type: String,
    required: true
  },
  clothing_attributes: [{
    type: String,
    required: true
  }]
});

const ProductDetails = mongoose.model('product_details', productDetailsSchema);

module.exports = ProductDetails;