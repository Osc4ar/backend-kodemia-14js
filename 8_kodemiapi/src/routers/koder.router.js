const express = require('express')
const controller = require('../controllers/koder.controller')
const auth = require('../middlewares/auth')

const router = express.Router()
router.use(auth)

router.get('/', controller.getKoder)
router.post('/', controller.saveKoder)
router.delete('/:id', controller.deleteKoder)

module.exports = router
