const productRouter = require('express').Router()
const productController = require('../controllers/Product')

productRouter.get('/', productController.getProducts)
productRouter.post('/', productController.createProduct)
productRouter.delete('/', productController.deleteProduct)
productRouter.post('/update', productController.updateProduct)

module.exports = productRouter