const route = require('express').Router();
const {addOrder, myOrder} = require('../controller/orderController')

route.post('/', addOrder)
route.get('/:id', myOrder)

module.exports = route 