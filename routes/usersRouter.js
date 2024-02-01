const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const validateRegister = require("../middlewares/registerValidation");
const validateUpdate = require("../middlewares/editValidation");
const upload = require('../middlewares/multerUserConfig');



router.get("/login", usersController.login);
router.post("/login", usersController.log);

router.get("/register", usersController.register);
router.post("/register", upload.single("profile-pic"), validateRegister, usersController.regist );

router.get("/profile", usersController.profile);
router.post("/editar-perfil", upload.single("profilepic"), validateUpdate, usersController.edit);

router.get("/log-out", usersController.logout);

module.exports = router;