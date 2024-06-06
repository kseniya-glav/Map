const Router = require("express");
const spisokCatsController = require("../controllers/spisokCatsController");
const router = new Router();

router.get("/", spisokCatsController.getAll);
router.post("/adding", spisokCatsController.adding);
router.post("/update", spisokCatsController.update);


module.exports = router;
