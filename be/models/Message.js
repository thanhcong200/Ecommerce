const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema({
    room: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "Room"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: "Chatroom is required!",
        ref: "User"
    },
    message: {
        type: String,
        required: "Message is required!",
    }
})


module.exports = mongoose.model('Message', Message)

