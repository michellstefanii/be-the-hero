const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentalController = require('./controllers/IncidentalController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.get('/profile', ProfileController.index)

routes.get('/incidents', IncidentalController.index)
routes.post('/incidents', IncidentalController.create)
routes.delete('/incidents/:id', IncidentalController.delete)

module.exports = routes