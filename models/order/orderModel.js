var mongoose = require('mongoose')

var orderSchema = mongoose.Schema({
  username: { type: String, default: 'Anonymous' },
  contact: { type: String, default: '' },
  email: { type: String, default: '' },
  service_type: { type: String, isRequired: true },
  item_title: { type: String, isRequired: true },
  item_category: { type: String, isRequired: true },
  payment_method: { type: String, default: '' },
  date_time: { type: Date, default: Date.now },
  done: { type: Boolean, default: false }
})

module.exports = mongoose.model('order', orderSchema)
