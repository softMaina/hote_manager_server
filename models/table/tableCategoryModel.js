var mongoose = require('mongoose');
var tableCategory = mongoose.Schema({
    title:{type:String,isRequired:true},
    description:{type:String, isRequired:true}
})
module.exports = mongoose.model("tableCategory",tableCategory);