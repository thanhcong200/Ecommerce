const mongoose = require('mongoose');

const Room = new mongoose.Schema(
    {
        name: {
            type: String,
            required: "Name is required!"
        }
    },
);


module.exports = mongoose.model("Room", Room);