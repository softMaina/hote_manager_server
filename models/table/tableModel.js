var mongoose = require('mongoose')
var table = mongoose.Schema({
  no_of_people: { type: Number, isRequired: true }
})
module.exports = mongoose.model('table', table)
