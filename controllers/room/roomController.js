'use strict'
var roomCategories = require('../../models/room/roomCategoryModel')
var Room = require('../../models/room/roomModel')
class roomController {
  createCategory (req, res, next) {
    var roomCategory = new roomCategories(req.body)
    roomCategory.save(function (err, response) {
      if (err) { return res.json(err) }
      res.statusMessage = 'Room Category created message'
      return res.status(201).json(response)
    })
  }

  updateCategory (req, res, next) {
    const update = req.body
    const filter = { _id: req.params.id }
    roomCategories.findOneAndUpdate(filter, update, { new: true }, function (error, response) {
      if (error) {
        res.statusMessage = 'Room category update failed'
        return res.json(error)
      }
      res.statusMessage = 'Room Category added'
      return res.status(202).json(response)
    })
  }

  deleteCategory (req, res, next) {
    roomCategories.remove({ _id: req.params.id }).then((error, response) => {
      if (error) {
        res.statusMessage = 'An error occured,could not delete item'
        return res.json(error)
      }
      res.statusMessage = 'Room category deleted'
      return res.status(202).json(response)
    })
  }

  createRoom (req, res, next) {
    var requestobj = req.body
    var data = {
      title: requestobj.title,
      description: requestobj.description,
      categoryid: requestobj.category,
      no_of_people: requestobj.no_of_people,
      // image:req.file.filename,
      image: 'none',
      cost: requestobj.cost
    }
    var room = new Room(data)
    room.save(function (err, response) {
      if (err) {
        res.statusMessage = 'Failed to create room'
        return res.json(err)
      }
      res.statusMessage = 'Room created successfully'
      return res.status(201).json(response)
    })
  }

  updateRoom (req, res, next) {
    const update = req.body
    const filter = { _id: req.params.id }
    Room.findOneAndUpdate(filter, update, { new: true }, function (error, response) {
      if (error) {
        res.statusMessage = 'Failed to update room'
        return res.json(error)
      }
      res.statusMessage = 'Room successfully updated'
      return res.status(202).json(response)
    })
  }

  deleteRoom (req, res, next) {
    Room.remove({ _id: req.params.id }).then((error, response) => {
      if (error) {
        res.statusMessage = 'delete room failed'
        return res.json(error)
      }
      res.statusMessage = 'Room deleted successfully'
      return res.status(202).json(response)
    })
  }

  getRooms (req, res, next) {
    roomCategories.aggregate([{
      $lookup: {
        from: 'rooms',
        localField: '_id',
        foreignField: 'categoryid',
        as: 'rooms'
      }
    }
    ]).then((err, response) => {
      if (err) { return res.json(err) }
      return res.json(response)
    })
  }
}

var room = new roomController()
module.exports = room
