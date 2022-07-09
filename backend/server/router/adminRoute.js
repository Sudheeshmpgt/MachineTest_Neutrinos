const route = require('express').Router();
const {adminLogin} = require ('../controller/adminController')

route.post('/login', adminLogin)

module.exports = route