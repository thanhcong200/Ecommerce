const messageModel = require('../models/Message')

exports.getMessageForUser = async(req, res) => {
    const {idUser} = req.body
    const messages = await messageModel.find({user: idUser})
    res.json({
        status: 200, 
        messages: messages
    })
}


exports.getAllMessages = async(req, res) => {
    const messages = await messageModel.find({})
    res.json({
        status: 200, 
        messages: messages
    })
}