const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const upload = require('../middlewares/multerProductsConfig');
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/productos", productosController.productos);
router.get("/productos/create", productosController.create);

router.post("/productos/created", urlencodedParser, upload.single("imagen"), productosController.created);

router.get("/productos/:id/edit", productosController.edit);
router.get("/productos/delete", productosController.delete);
router.get("/productos/:id", productosController.detail);

router.put("/productos/:id", urlencodedParser, upload.single("imagen"), productosController.update);

router.delete("/productos/:id", productosController.erased);

module.exports = router;
