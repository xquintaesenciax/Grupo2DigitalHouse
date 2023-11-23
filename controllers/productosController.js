const productos = require("../products/products");
const controller = {
  productos: (req, res) => {
    res.render("productos", { productos: productos });
  },
  detalle: (req, res) => {
    res.render("detalle-producto")
  }
};

module.exports = controller;