const Router = require('express')
const typeController = require('../controllers/typeController')
const router = new Router()


router.post('/registratoion', typeController.create)
router.post('/login', typeController.getAll)
router.get('/auth', typeController.getAll)


module.exports = router