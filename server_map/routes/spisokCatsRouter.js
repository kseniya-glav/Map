const Router = require("express");
const spisokCatsController = require("../controllers/spisokCatsController");
const router = new Router();

router.get("/", spisokCatsController.getAll);
router.post("/adding", spisokCatsController.adding);

module.exports = router;
