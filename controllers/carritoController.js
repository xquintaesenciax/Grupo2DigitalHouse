const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);

const controller = {
  carrito: (req, res) => {
    // Obtén los datos del usuario desde la sesión si está autenticado
    const user = req.session.user;

    res.render("carrito", { productos, user });
  },
};

module.exports = controller;

