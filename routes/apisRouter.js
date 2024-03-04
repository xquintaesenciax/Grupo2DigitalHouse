const express = require("express");
const router = express.Router();
const userController = require("../controllers/apis/usersController");

router.get("/api/users", userController.list);
router.get("/api/users/:id", userController.detail);

module.exports = router;