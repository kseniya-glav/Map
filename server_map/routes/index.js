const Router = require('express')
const router = new Router()
const categoryRouter = require('./categoryRouter')
const typeRouter = require('./typeRouter')
const localityRouter = require('./localityRouter')
const orgRouter = require('./orgRouter')
const userRouter = require('./userRouter')

router.use('/category', categoryRouter)
router.use('/type', typeRouter)
router.use('/locality', localityRouter)
router.use('/org', orgRouter)
// router.use('/user', userRouter)

module.exports = router