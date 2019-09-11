'use strict'
var menuController = require('../controllers/menu/menuController')
var orderController = require('../controllers/order/orderController')
var roomController = require('../controllers/room/roomController')
var eventController = require('../controllers/event/eventController')
var tableController = require('../controllers/table/tableController')
var express = require('express')
var multerConfig = require('../config/multer')
var router = express.Router()

router.post('/api/v1/menucategory', menuController.createMenuCategory)
router.post('/api/v1/addmenu',multerConfig.saveToUploads, menuController.createMenu)
router.get('/api/v1/menucategories', menuController.getCategories)
router.get('/api/v1/menu', menuController.getMenu)
router.delete('/api/v1/deletemenucategory/:id', menuController.deleteCategory);
router.delete('/api/v1/deletemenu/:id',menuController.deleteMenuItem);

router.post('/api/v1/order', orderController.createOrder)
router.get('/orders', orderController.getOrders)

// room routes
router.get('/api/v1/getRooms', roomController.getRooms)
router.post('/api/v1/saveRooms',multerConfig.saveToUploads, roomController.createRoom)
router.post('/api/v1/saveRoomCategory', roomController.createCategory)
router.put('/api/v1/updateRoom/:id', roomController.updateRoom)
router.put('/api/v1/updateRoomCategory/:id', roomController.updateCategory)
router.delete('/api/v1/deleteRoom/:id', roomController.deleteRoom)
router.delete('/api/v1/deleteRoomCategory/:id', roomController.deleteCategory)

// event routes
router.get('/api/v1/getEvents', eventController.getEvents)
router.get('/api/v1/getEventCategories', eventController.getEventCategories)
router.post('/api/v1/saveEvent', eventController.createEvent)
router.post('/api/v1/saveEventCategory', eventController.createEventCategory)
router.put('/api/v1/updateEventCategory/:id', eventController.updateEventCategory)
router.put('/api/v1/updateEvent/:id', eventController.updateEvent)
router.delete('/api/v1/deleteEventCategory/:id', eventController.deleteEventCategory)
router.delete('/api/v1/deleteEvent/:id', eventController.deleteEvent)

// table routes
router.post('/api/v1/saveTableCategory', tableController.createTableCategory)
router.post('/api/v1/saveTable', tableController.createTable)
router.put('/api/v1/updateTableCategory', tableController.updateTableCategory)
router.put('/api/v1/updateTable', tableController.updateTable)
router.delete('/api/v1/deleteTableCategory', tableController.deleteTableCategory)
router.delete('/api/v1/deleteTable', tableController.deleteTable)

router.get('/test', function (req, res, next) {
  console.log('works')
})

module.exports = router
