var eventCategory = require('../../models/event/eventCategoryModel')
var event = require('../../models/event/eventModel')

class Event {
  createEvent (req, res, next) {
    var eventsave = new event(req.body)
    eventsave.save(function (err, response) {
      if (err) { 
        res.statusMessage = "An error occured"
        return res.json(err) }
      res.statusMessage="Event created successfully"
      return res.status(201).json(response)
    })
  }

  createEventCategory (req, res, next) {
    var category = new eventCategory(req.body)
    category.save(function (err, response) {
      if (err) { 
        res.statusMessage = "An error occurred"
        return res.json(err) }
      res.statusMessage = "Event Category created successfully"
      return res.status(201).json(response)
    })
  }

  getEventCategories(req, res, next){
    eventCategory.find({}).then((err, response)=>{
      if(err){
        res.statusMessage = "An error occured"
        return res.json(err)
      }
      res.statusMessage = "Fetch was successful"
      return res.status(200).json(response)
    })
  }

  updateEventCategory(req,res,next){
    let update = req.body
    let filter = {_id:req.params.id}
    eventCategory.findOneAndUpdate(filter, update, {new:true},function(error, response){
      if(error){
        res.statusMessage = "Update encountered an error"
        return res.json(error)
      }
      res.statusMessage = "Update successful"
      return res.status(202).json(response)
    })
  }

  deleteEventCategory(req,res, next){
    eventCategory.remove({_id:req.params.id}).then((err, response)=>{
      if(err){
        res.statusMessage = "An error occured"
        return res.json(err)
      }
      res.statusMessage = "Item deleted successfully"
      return res.status(200).json(response)
    })
  }

  getEvents (req, res, next) {
    eventCategory.aggregate([{
      $lookup: {
        from: 'events',
        localField: '_id',
        foreignField: 'categoryid',
        as: 'events'
      }
    }]).then((err, response) => {
      if (err) { 
        res.statusMessage = "Fetch Failed"
        return res.json(err) 
      }
      res.statusMessage ="Fetch was successfull"
      return res.status(200).json(response)
    })
  }

  updateEvent(req, res, next){
    let update = req.body
    let filter = {_id:req.params.id}
    event.findOneAndUpdate(filter, update, {new:true},function(error, response){
      if(error){
        res.statusMessage = "Update failed"
        return res.status(302).json(error)
      }
      res.statusMessage = "Update was successful"
      return res.status(202).json(response)
    })
  }

  deleteEvent(req, res, next){
    event.remove({_id:req.params.id}).then((error, response)=>{
      if(error){
          res.statusMessage = "Delete Failed"
          return res.status(409).json(error)
      }
      res.statusMessage = "deleted successfuly";
      return res.status(202).json(response) 
    })
  }
}

var events = new Event()
module.exports = events
