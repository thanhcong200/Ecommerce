const messageRouter = require('express').Router()
const messageController = require('../controllers/message')

messageRouter.post('/', messageController.getMessageForUser)
messageRouter.get('/', messageController.getAllMessages)

module.exports = messageRouter
