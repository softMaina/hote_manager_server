var mongoose = require('mongoose')
var menuCategorySchema = mongoose.Schema({
  title: { type: String, unique: true },
  description: { type: String }
})
module.exports = mongoose.model('menucategory', menuCategorySchema)
