const router = require('express').Router()
const userRouter = require('./user')
const roomRouter = require('./room')
const productRouter = require('./product')
const messageRouter = require('./message')
const orderRouter = require('./order')

router.use('/user', userRouter)
router.use('/room', roomRouter)
router.use('/product', productRouter)
router.use('/message', messageRouter)
router.use('/order', orderRouter)


module.exports = router