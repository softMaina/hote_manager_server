var order = require('../../models/order/orderModel')
var payment_method = ['pay_on_delivery', 'mpesa']
class OrderController {
  createOrder (req, res, next) {
    // validate
    var orderModel = new order(req.body)
    orderModel.save(function (error, response) {
      if (error) { return res.json(error) }
      return res.json(response)
    })
  }

  getOrders (req, res, next) {
    order.find({}).then(
      (response) => {
        return res.json(response)
      }).catch(error => {
      return res.json(response)
    })
  }
}

var ordercontroller = new OrderController()

module.exports = ordercontroller
