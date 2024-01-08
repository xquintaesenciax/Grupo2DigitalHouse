const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegister = require("../middlewares/registerValidation")
const upload = require('../middlewares/multerUserConfig');



router.get("/login", usersController.login);
router.post("/login", usersController.log)

router.get("/register", usersController.register);
router.post("/register", upload.single("profile-pic"), validateRegister, usersController.regist )

module.exports = router;