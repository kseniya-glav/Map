const Router = require('express')
const localityController = require('../controllers/localityController')
//const checkRole = require('../middleware/checkRoleMiddleware')
const router = new Router()


router.post('/', localityController.create)
router.get('/', localityController.getAll)


module.exports = router