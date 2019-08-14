'use strict'
var menuController = require('../controllers/menu/menuController')
var orderController = require('../controllers/order/orderController')
var roomController = require('../controllers/room/roomController')
var express = require('express')
var multerConfig = require('../config/multer')
var router = express.Router()

router.post('/api/v1/menucategory', menuController.createMenuCategory)
router.post('/api/v1/addmenu', menuController.createMenu)

router.get('/api/v1/menucategories', menuController.getCategories)
router.get('/api/v1/menu', menuController.getMenu)
router.post('/api/v1/order', orderController.createOrder)
router.get('/orders', orderController.getOrders)

// room routes
router.get('/api/v1/rooms', roomController.getRooms)
router.post('/api/v1/saveRoom', roomController.createRoom)
router.post('/api/v1/saveRoomCategory', roomController.createCategory)

router.get('/test', function (req, res, next) {
  console.log('works')
})

module.exports = router
