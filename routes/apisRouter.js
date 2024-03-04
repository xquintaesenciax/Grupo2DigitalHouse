const express = require("express");
const router = express.Router();
const userController = require("../controllers/apis/usersController");
const productsController = require("../controllers/apis/productController");

//ROUTES PARA API DE LOS USERS
router.get("/users", userController.list);
router.get("/users/:id", userController.detail);

//ROUTES PARA API DE LOS PRODUCTS
router.get("/products", productsController.list);
router.get("/products/:id", productsController.detail);

module.exports = router;
