var mongoose = require('mongoose')
var table = mongoose.Schema({
  image: { type: String, default: 'null' },
  categoryid: { type: mongoose.Types.ObjectId, isRequired: true },
  no_of_people: { type: Number, isRequired: true },
  tag: { type: String }
})
module.exports = mongoose.model('table', table)
