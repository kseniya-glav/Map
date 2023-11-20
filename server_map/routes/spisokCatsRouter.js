const Router = require("express");
const typeController = require("../controllers/spisokCatsController");
const router = new Router();

router.get("/", typeController.getAll);

module.exports = router;
