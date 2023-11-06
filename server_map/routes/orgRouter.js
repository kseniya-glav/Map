const Router = require('express')
const orgController = require('../controllers/orgController')
//const checkRole = require('../middleware/checkRoleMiddleware')
const router = new Router()


router.post('/', orgController.create)
router.get('/', orgController.getAll)
router.get('/:id', orgController.getAll)


module.exports = router