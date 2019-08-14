var tableModel = require('../../models/table/tableModel')
var tableCategory = require('../../models/event/eventCategoryModel')
class Table {
  getTables (req, res, next) {
    roomCategories.aggregate([{
      $lookup: {
        from: 'tables',
        localField: '_id',
        foreignField: 'categoryid',
        as: 'tables'
      }
    }
    ]).then((err, response) => {
      if (err) { return res.json(err) }
      return res.json(response)
    })
  }

  createTableCategory (req, res, next) {
    const table = new tableCategory(req.body)
    table.save(function (error, response) {
      if (error) {
        res.statusMessage = 'table category failed'
        return res.json(error)
      }
      res.statusMessage = 'Tabel category added successfully'
      return res.status(201).json(response)
    })
  }

  createTable (req, res, next) {
    const table = new tableModel(req.body)
    table.save(function (error, response) {
      if (error) {
        res.statusMessage = 'Table failed'
        return res.json(error)
      }
      res.statusMessage = 'Table added successfully'
      return res.status(201).json(response)
    })
  }

  updateTableCategory (req, res, next) {
    const filter = { _id: req.params.id }
    const update = req.body

    tableCategory.findOneAndUpdate(filter, update, { new: true }, function (error, response) {
      if (error) {
        res.statusMessage = 'failed to update table category'
        return res.json(error)
      }
      res.statusMessage = 'Update successful'
      return res.status(202).json(response)
    })
  }

  updateTable (req, res, next) {
    const filter = { _id: req.params.id }
    const update = req.body

    tableModel.findOneAndUpdate(filter, update, { new: true }, function (error, response) {
      if (error) {
        res.statusMessage = 'failed to update table category'
        return res.json(error)
      }
      res.statusMessage = 'Update successful'
      return res.status(202).json(response)
    })
  }

  deleteTableCategory (req, res, next) {
    tableCategory.remove({ _id: req.params.id }).then((error, response) => {
      if (error) {
        res.statusMessage = 'Category deletion failed'
        return res.json(error)
      }
      res.statusMessage = 'Category deleted successfully'
      return res.status(202).json(response)
    })
  }

  deleteTable (req, res, next) {
    tableModel.remove({ _id: req.params.id }).then((error, response) => {
      if (error) {
        res.statusMessage = 'table deletion failed'
        return res.json(error)
      }
      res.statusMessage = 'table deleted successfully'
      return res.status(202).json(response)
    })
  }
}

var tableController = new Table()
module.exports = tableController
