const productos = require("../products/products");
const controller = {
  carrito: (req, res) => {
    res.render("carrito", { productos: productos });
  }
};

module.exports = controller;