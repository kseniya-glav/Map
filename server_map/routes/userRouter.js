const Router = require("express");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const router = new Router();

router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);
router.get("/getAll", userController.getAll);
router.delete("/delete/:id", userController.delete);
router.patch("/update/:id", userController.update);

module.exports = router;
