// const fs = require("fs");
// const dataProductos = fs.readFileSync("./data/productos.json");
// const productos = JSON.parse(dataProductos);
const db = require("../database/models");

const controller = {
  index: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Renderizar la vista principal con la información de productos y usuarios

    db.producto.findAll().then((result) => {
      res.render("index", { productos: result, user: user });
    });
  },
};

module.exports = controller;
