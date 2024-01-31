// const fs = require("fs");
// const data = fs.readFileSync("./data/productos.json");
// const productos = JSON.parse(data);
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

  created: (req, res) => {
    // Obtener información del usuario desde la sesión
    const user = req.session.user;

    // Resto del código para crear un nuevo producto...
    // console.log(req.file.filename);
    let precioConDescuento =
      (req.body.precio * (100 - req.body.descuento)) / 100;

    let precioCuotas = precioConDescuento / req.body.cuotas;
    db.producto.create({
      images: req.file.filename,
      nombre: req.body.nombre.toLowerCase(),
      descripcion: req.body.descripcion,
      color: req.body.color,
      cuotas: req.body.cuotas,
      precio: req.body.precio,
      precioConDescuento: precioConDescuento,
      descuento: req.body.descuento,
      precioCuotas: precioCuotas,
      id_categoria: req.body.categoria,
    });

    // CONSIDERO QUE ESTA ES UNA MEJOR MANERA DE REDIRIGIR
    // YA QUE LE PODEMOS INDICAR AL USUARIO QUE SU ACCION
    // SE REALIZO CORRECTAMENTE Y A SU VEZ, DAR TIEMPO A QUE
    // LA BASE DE DATOS SE ACTUALICE CORRECTAMENTE PARA
    // HACER USO DE SUS NUEVOS DATOS(SE PUEDE HACER UNA
    // VISTA QUE MANEJE ESTE TIEMPO DE ESPERA :) )

    res.send(`
  <p>Producto agregado exitosamente. Serás redirigido en 5 segundos...</p>
  <script>
    setTimeout(function() {
      window.location.href = '/productos';
    }, 5000); // 5000 milisegundos = 5 segundos
  </script>
`);
    // res.redirect("/productos");
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

  update: (req, res) => {
    // Resto del código para actualizar un producto...
    let precioConDescuento =
      (req.body.precio * (100 - req.body.descuento)) / 100;

    let precioCuotas = precioConDescuento / req.body.cuotas;

    db.producto.findByPk(req.params.id).then((product) => {
      let url;
      if (req.file) {
        url = req.file.filename;
      } else {
        url = product.images;
      }
      db.producto.update(
        {
          images: url,
          nombre: req.body.nombre.toLowerCase(),
          descripcion: req.body.descripcion,
          color: req.body.color,
          cuotas: req.body.cuotas,
          precio: req.body.precio,
          precioConDescuento: precioConDescuento,
          descuento: req.body.descuento,
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
    });
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
