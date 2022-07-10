const route = require('express').Router();
const {adminLogin, adminRegister} = require ('../controller/adminController')

route.post('/login', adminLogin)
route.post('/register', adminRegister)

module.exports = route