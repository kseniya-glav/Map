const Router = require("express");
const orgController = require("../controllers/orgController");
//const checkRole = require('../middleware/checkRoleMiddleware')
const router = new Router();

router.post("/", orgController.create);
router.get("/", orgController.getAll);
router.get("/:id", orgController.getAll);
router.delete("/delete/:id", orgController.delete);
router.patch("/update/:id", orgController.update);
router.get("/getAll", orgController.getAll);
router.post("/adding", orgController.adding);


module.exports = router;
