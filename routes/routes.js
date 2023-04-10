const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

route.get('/', controller.find)
route.post('/', controller.insert)

module.exports = route