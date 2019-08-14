var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId
var menuSchema = mongoose.Schema({
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'menucategory' },
  title: { type: String },
  description: { type: String },
  image: { type: String },
  price: { type: Number },
  ingredients: { type: String },
  stock: { type: Boolean, default: true }
})

module.exports = mongoose.model('menu', menuSchema)
