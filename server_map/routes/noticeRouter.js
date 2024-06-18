const Router = require("express");
const noticeController = require("../controllers/noticeController");
const router = new Router();

router.post("/adding", noticeController.adding);
router.get("/getAll", noticeController.getAll);
router.delete("/delete/:id", noticeController.delete);

module.exports = router;
