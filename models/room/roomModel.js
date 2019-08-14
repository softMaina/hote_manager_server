var mongoose = require('mongoose')
var roomSchema = mongoose.Schema({
  title: { type: String, isRequired: true },
  description: { type: String, isRequired: true },
  categoryid: { type: mongoose.Types.ObjectId, isRequired: true },
  cost: { type: Number, isRequired: true },
  no_of_people: { type: Number, isRequired: true },
  image: { type: String, isRequired: true },
  createdAt: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('room', roomSchema)
