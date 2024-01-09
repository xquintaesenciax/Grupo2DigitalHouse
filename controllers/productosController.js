const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);

const controller = {
  productos: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    res.render("./product/productos", { productos, user });
  },

  detail: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    const producto = productos.find((p) => p.id == req.params.id);
    res.render("./product/productoDetail", { producto, user });
  },

  create: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Verificar si el usuario tiene permisos de administrador
    if (user && user.admin) {
      res.render("./product/productoCreate", { user });
    } else {
      res.redirect("/productos"); // O redirigir a una página de error o inicio
    }
  },

  created: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Resto del código para crear un nuevo producto...

    res.redirect("/productos");
  },

  edit: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    const producto = productos.find((p) => p.id == req.params.id);

    // Verificar si el usuario tiene permisos de administrador
    if (user && user.admin) {
      res.render("./product/productoUpdate", { producto, user });
    } else {
      res.redirect("/productos"); // O redirigir a una página de error o inicio
    }
  },

  update: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Resto del código para actualizar un producto...

    res.redirect("/productos");
  },

  delete: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Verificar si el usuario tiene permisos de administrador
    if (user && user.admin) {
      res.render("./product/productoDelete", { productos, user });
    } else {
      res.redirect("/productos"); // O redirigir a una página de error o inicio
    }
  },

  erased: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Resto del código para eliminar un producto...

    res.redirect("/productos");
  },
};

module.exports = controller;

