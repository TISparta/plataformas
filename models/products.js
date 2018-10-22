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
    require: false
  }/*,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }*/
}, {
  toJSON: {
    virtuals: true
  }
})

module.exports = mongoose.model('Product', productSchema)

