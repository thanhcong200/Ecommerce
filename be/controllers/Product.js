const productModel = require('../models/Product')
const productRouter = require('../routers/product')

exports.createProduct = async(req, res) => {
    const {name, image} = req.body
    const product = await productModel({name, image})
    await product.save()
    res.json({
        status: 201,
        product: product
    })
}


exports.getProducts = async(req, res) => {
    const products = await productModel.find({})
    res.json({
        status: 200,
        products: products
    })
}


exports.deleteProduct = async(req, res) => {
    const {_id} = req.body 
    await productModel.deleteOne({_id})

    res.json({
        status: 200
    })
}

exports.updateProduct = async(req, res) => {
    const {_id, name, image} = req.body
    const product = await productModel.findOne({_id})
    if(name.length > 0) product.name = name 
    if(image.length > 0 ) product.image = image
    product.save()

    res.json({
        status: 200,
        product: product
    })
}

