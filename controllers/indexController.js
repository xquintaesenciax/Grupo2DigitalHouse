const fs = require("fs");
const dataProductos = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(dataProductos);

const controller = {
  index: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Renderizar la vista principal con la información de productos y usuarios
    res.render("index", { productos: productos, user: user });
  },
};

module.exports = controller;
