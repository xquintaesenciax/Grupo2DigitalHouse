const productos = require("../products/products");
const controller = {
  productos: (req, res) => {
    res.render("productos", { productos: productos });
  },
  detalle: (req, res) => {
    let producto = productos.filter(
      (producto) => producto.id == req.params.id
    )[0];
    res.render("detalle-producto", { producto: producto });
  },
  create: (req, res) => {
    res.render("producto-create")
  },
  edit: (req, res) =>{
    res.render("producto-edit")
  }
};

module.exports = controller;
