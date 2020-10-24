const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
    name:{
        type: String,
        required: 'Username is required!'
    },
    image: {
        type: String,
        required: 'Image preview product is required!'
    }
})


module.exports = mongoose.model('Product', Product)

