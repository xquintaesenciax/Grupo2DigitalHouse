const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegister = require("../middlewares/registerValidation")

router.get("/login", usersController.login);
router.post("/login", usersController.log)

router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.regist )

module.exports = router;