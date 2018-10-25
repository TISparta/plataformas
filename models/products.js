const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  cardName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: '???',
    required: false
  },
  attack: {
    type: Number,
    default: -1,
    required: false
  },
  defense: {
    type: Number,
    default: -1,
    required: false
  },
  username: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    default: 0,
    required: true
  }
}, {
  toJSON: {
    virtuals: true
  }
})

module.exports = mongoose.model('Product', productSchema)

