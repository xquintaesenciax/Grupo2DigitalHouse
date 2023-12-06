const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);
const controller = {
  productos: (req, res) => {
    res.render("./product/productos", { productos: productos });
  },
  detail: (req, res) => {
    let producto = productos.filter(
      (producto) => producto.id == req.params.id
    )[0];
    res.render("./product/productoDetail", { producto: producto });
  },
  create: (req, res) => {
    res.render("./product/productoCreate");
  },
  created: (req, res) => {
    res.send("creado");
  },
  edit: (req, res) => {
    let producto = productos.filter(
      (producto) => producto.id == req.params.id
    )[0];
    res.render("./product/productoUpdate", { producto: producto });
  },
  update: (req, res) => {
    res.send("actualizado");
  },
  delete: (req, res) => {
    res.render("./product/productoDelete", { productos: productos });
  },
  erased: (req, res) => {
    res.send("eliminado");
  },
};

module.exports = controller;
