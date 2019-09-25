var mongoose = require('mongoose')
var ObjectId = mongoose.Schema.Types.ObjectId
var orderSchema = mongoose.Schema({
    title: { type: String },
    description: { type: String },
    amount: { type: Number },
    cost: { type: Number },
    date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('menuorder', orderSchema)
