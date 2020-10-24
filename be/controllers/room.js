const { json } = require('express')
const roomModel = require('../models/Room')


exports.getRooms = async(req, res) => {
    const rooms = await roomModel.find({})
    res.json({
        status: 200,
        rooms: rooms
    })
}

exports.getRoom = async(req, res) => {
    const {id} = req.body
    const room = await roomModel.findOne({_id: id})

    res.json({
        status: 200,
        room: room
    })
}