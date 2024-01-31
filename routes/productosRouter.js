const express = require("express");
const router = express.Router();
const productosController = require("../controllers/productosController");
const upload = require("../middlewares/multerProductsConfig");
const bodyParser = require("body-parser");

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get("/", productosController.productos);
router.get("/create", productosController.create);

router.post(
  "/created",
  urlencodedParser,
  upload.single("imagen"),
  productosController.created
);

router.post("/search", productosController.search);

router.get("/delete", productosController.delete);
router.get("/:id/edit", productosController.edit);
router.get("/:id", productosController.detail);

router.put(
  "/:id",
  urlencodedParser,
  upload.single("imagen"),
  productosController.update
);

router.delete("/:id", productosController.erased);

module.exports = router;
