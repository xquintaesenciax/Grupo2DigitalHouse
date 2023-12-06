const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);
const controller = {
  carrito: (req, res) => {
    res.render("carrito", { productos: productos });
  },
};

module.exports = controller;
