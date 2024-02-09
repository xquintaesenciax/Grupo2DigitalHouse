// const fs = require("fs");
// const data = fs.readFileSync("./data/productos.json");
// const productos = JSON.parse(data);
const { validationResult } = require("express-validator");
const db = require("../database/models");
const Op = db.Sequelize.Op;

const controller = {
  productos: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;
    // Obtener los datos de la base de datos
    db.producto.findAll().then((result) => {
      res.render("./product/productos", { productos: result, user: user });
    });
  },

  detail: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Obtener los datos de la base de datos
    db.producto.findByPk(req.params.id).then((result) => {
      res.render("./product/productoDetail", {
        producto: result,
        user: user,
      });
    });
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

  created: async (req, res) => {
    const user = req.session.user;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Si hay errores de validación, renderizamos la vista de registro con los errores
        return res.render("./product/productoCreate", {
          errors: errors.array(),
          old: req.body,
          user: user,
        });
      }

      // Resto del código para crear un nuevo producto...
      let descuento = null;
      let precioConDescuento = null;
      let cuotas = null;
      let precioCuotas = null;

      if (req.body.descuento) {
        descuento = parseFloat(req.body.descuento); // Convertir a número
        precioConDescuento = (req.body.precio * (100 - descuento)) / 100;
      }

      if (req.body.cuotas) {
        cuotas = parseInt(req.body.cuotas); // Convertir a número entero
        if (precioConDescuento) {
          precioCuotas = precioConDescuento / cuotas;
        } else {
          precioCuotas = req.body.precio / cuotas;
        }
      }

      const producto = await db.producto.create({
        images: "/img/product/" + req.file.filename,
        nombre: req.body.nombre.toUpperCase(),
        descripcion: req.body.descripcion,
        color: req.body.color,
        cuotas: cuotas,
        precio: req.body.precio,
        precioConDescuento: precioConDescuento,
        descuento: descuento,
        precioCuotas: precioCuotas,
        id_categoria: req.body.categoria,
      });

      if (producto) {
        // Producto creado exitosamente
        res.send(`
          <p>Producto agregado exitosamente. Serás redirigido en 5 segundos...</p>
          <script>
            setTimeout(function() {
              window.location.href = '/productos';
            }, 5000); // 5000 milisegundos = 5 segundos
          </script>
        `);
      } else {
        // Error al crear el producto
        res.status(500).send("Error al agregar el producto.");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor.");
    }
  },

  edit: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // const producto = productos.find((p) => p.id == req.params.id);

    // Verificar si el usuario tiene permisos de administrador
    if (user && user.admin) {
      db.producto.findByPk(req.params.id).then((result) => {
        res.render("./product/productoUpdate", {
          producto: result,
          user,
        });
      });
    } else {
      res.redirect("/productos"); // O redirigir a una página de error o inicio
    }
  },

  update: async (req, res) => {
    const user = req.session.user;
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Si hay errores de validación, recuperar los datos del producto y renderizar la vista de actualización con los errores y los datos
        const product = await db.producto.findByPk(req.params.id);
        return res.render("./product/productoUpdate", {
          errors: errors.array(),
          producto: product,
          old: req.body,
          user: user,
        });
      }

      // Resto del código para actualizar un producto...
      let descuento = null;
      let precioConDescuento = null;
      let cuotas = null;
      let precioCuotas = null;

      if (req.body.descuento) {
        descuento = parseFloat(req.body.descuento); // Convertir a número
        precioConDescuento = (req.body.precio * (100 - descuento)) / 100;
      }

      if (req.body.cuotas) {
        cuotas = parseInt(req.body.cuotas); // Convertir a número entero
        if (precioConDescuento) {
          precioCuotas = precioConDescuento / cuotas;
        } else {
          precioCuotas = req.body.precio / cuotas;
        }
      }

      const product = await db.producto.findByPk(req.params.id);
      let url = product.images;

      if (req.file) {
        url = "/img/product/" + req.file.filename;
      }

      await db.producto.update(
        {
          images: url,
          nombre: req.body.nombre.toUpperCase(),
          descripcion: req.body.descripcion,
          color: req.body.color,
          cuotas: cuotas,
          precio: req.body.precio,
          precioConDescuento: precioConDescuento,
          descuento: descuento,
          precioCuotas: precioCuotas,
          id_categoria: req.body.categoria,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );

      res.redirect("/productos");
    } catch (error) {
      console.error(error);
      res.status(500).send("Error interno del servidor.");
    }
  },
  delete: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Verificar si el usuario tiene permisos de administrador
    if (user && user.admin) {
      db.producto.findAll().then((result) => {
        res.render("./product/productoDelete", {
          productos: result,
          user: user,
        });
      });
    } else {
      res.redirect("/productos"); // O redirigir a una página de error o inicio
    }
  },

  erased: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Resto del código para eliminar un producto...
    db.producto.destroy({
      where: {
        id: req.params.id,
      },
    });

    res.redirect("/productos");
  },
  search: (req, res) => {
    const user = req.session.user;
    db.producto
      .findAll({
        where: {
          nombre: { [Op.like]: `%${req.body.search}%` },
        },
      })
      .then((result) => {
        if (result.length == 0) {
          db.producto.findAll().then((result) => {
            res.render("./product/searchError", {
              productos: result,
              user: user,
              busqueda: req.body.search.toUpperCase(),
            });
          });
        } else {
          res.render("./product/search", {
            productos: result,
            busqueda: req.body.search.toUpperCase(),
            user: user,
          });
        }
      });
  },
};

module.exports = controller;
