var eventCategory = require('../../models/event/eventCategoryModel')
var event = require('../../models/event/eventModel')

class Event {
  createEvent (req, res, next) {
    var eventsave = new event(req.body)
    eventsave.save(function (err, response) {
      if (err) { return res.json(err) }
      return res.json(response)
    })
  }

  createEventCategory (req, res, next) {
    var category = new eventCategory(req.body)
    category.save(function (err, response) {
      if (err) { return res.json(err) }
      return res.json(response)
    })
  }

  getEvents (req, res, next) {
    event.aggregate([{
      $lookup: {
        from: 'eventcategories',
        localField: 'category',
        foreignField: '_id',
        as: 'category'
      }
    }]).then((err, response) => {
      if (err) { res.json(err) }
      res.json(response)
    })
  }
}

var events = new Event()
module.exports = events
