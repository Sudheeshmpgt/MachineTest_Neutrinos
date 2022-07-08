const route = require('express').Router();
const {userLogin} = require('../controller/userController')

route.post('/', userLogin)

module.exports = route