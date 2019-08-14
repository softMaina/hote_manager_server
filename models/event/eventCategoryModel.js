var mongoose = require('mongoose')
var eventCategorySchema = mongoose.Schema({
  title: { type: String, isRequired: true },
  description: { type: String, isRequired: true }
})
module.exports = mongoose.model('eventCategory', eventCategorySchema)
