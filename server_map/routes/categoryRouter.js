const Router = require("express");
const categoryController = require("../controllers/categoryController");
//const checkRole = require('../middleware/checkRoleMiddleware')
const router = new Router();

router.post("/", categoryController.create);
router.get("/", categoryController.getAll);

module.exports = router;
