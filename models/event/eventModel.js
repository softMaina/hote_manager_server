var mongoose = require('mongoose');
var eventSchema =mongoose.Schema({
    title:{type:String,isRequired:true},
    description:{type:String,isRequired:true},
    image:{type:String},
    cost:{type:Number},
    location:{type:String},
    tag:{type:String}

})
module.exports = mongoose.model('event',eventSchema);