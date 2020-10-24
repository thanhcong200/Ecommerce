const orderModel = require('../models/Order')

exports.orderProduct = async(req, res) => {
    const {idProduct, idUser} = req.body 
    const order = await orderModel({ product: idProduct, user: idUser})

    res.json({
        status: 201,
        order: order
    })
}

exports.deleteOrder = async(req, res) => {
    const {idProduct, idUser} = req.body 
    const order = await orderModel.deleteOne({ product: idProduct, user: idUser})

    res.json({
        status: 200
    })
}