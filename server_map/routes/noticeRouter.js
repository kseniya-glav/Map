const Router = require("express");
const noticeController = require("../controllers/noticeController");
const router = new Router();

router.post("/adding", noticeController.adding);

module.exports = router;
