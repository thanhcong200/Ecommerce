const roomRouter = require('express').Router()
const roomController = require('../controllers/room')

roomRouter.get('/', roomController.getRooms)
roomRouter.post('/', roomController.getRoom)


module.exports = roomRouter