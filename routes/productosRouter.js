const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");

router.get("/productos", productosController.productos);
router.get("/productos/create", productosController.create);

router.post("/productos/created", productosController.created);

router.get("/productos/:id/edit", productosController.edit);

router.get("/productos/delete", productosController.delete);

router.get("/productos/:id", productosController.detail);

router.put("/productos/:id", productosController.update);

router.delete("/productos/:id", productosController.erased);

module.exports = router;
