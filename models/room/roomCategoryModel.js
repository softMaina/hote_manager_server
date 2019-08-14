var mongoose = require('mongoose')
var roomCategorySchema = mongoose.Schema({
    title:{type:String, isRequired:true},
    description:{type:String, isRequred:true}
})

var roomCategory = mongoose.model('roomCategory',roomCategorySchema);

module.exports = roomCategory;