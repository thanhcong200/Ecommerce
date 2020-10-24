const orderRouter = require('express').Router()
const orderController = require('../controllers/order')

orderRouter.post('/create', orderController.orderProduct)
orderRouter.post('/delete', orderController.deleteOrder)

module.exports = orderRouter