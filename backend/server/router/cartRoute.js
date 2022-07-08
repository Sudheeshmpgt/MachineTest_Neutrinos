const route = require('express').Router();
const {addToCart, getCartDetails} = require('../controller/cartController')

route.post('/', addToCart)
route.get('/:id', getCartDetails)

module.exports = route 