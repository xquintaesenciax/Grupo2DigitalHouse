const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

router.get("/productos", productosController.productos);

router.get("/productos/create", productosController.create)

router.get("/productos/edit", productosController.edit)

router.get("/productos/:id", productosController.detalle);



module.exports = router;