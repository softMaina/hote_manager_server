var mongoose = require('mongoose')
var eventSchema = mongoose.Schema({
  title: { type: String, isRequired: true },
  description: { type: String, isRequired: true },
  categoryid: {type:mongoose.Types.ObjectId, isRequired:true },
  image: { type: String, default:"null" },
  cost: { type: Number },
  location: { type: String },
  tags: { type:String }

})
module.exports = mongoose.model('event', eventSchema)
