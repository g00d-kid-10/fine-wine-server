const express = require('express')
const route = express.Router()
const controller = require('../controller/controller')

route.get('/movies', controller.findMovies)
route.get('/tvshows', controller.findTVShows)
route.post('/insertMovie', controller.insertMovie)
route.post('/insertTVShow', controller.insertTVShow)

module.exports = route