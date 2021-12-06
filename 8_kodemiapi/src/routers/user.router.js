const express = require('express')
const controller = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

const router = express.Router()

router.post('/', controller.createUser)
router.post('/login', controller.login)

// Middleware en dos pasos, la linea 11 avisa a la linea 12
// router.get('/', auth) // middleware 1
// router.get('/', controller.getAllUsers) // endpoint

// Manera 1, usando middleware en el get, se llaman de izquierda a derecha
router.get('/', auth, controller.getAllUsers)

module.exports = router
