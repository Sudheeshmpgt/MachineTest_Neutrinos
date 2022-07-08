const route = require('express').Router();
const upload = require('../middleware/cloudinary')
const {addNewProduct, getAllProducts} = require('../controller/productController')

route.post('/', upload.single("product_image"), addNewProduct)
route.get('/', getAllProducts)

module.exports = route 