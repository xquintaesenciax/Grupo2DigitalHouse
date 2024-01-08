const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);

const controller = {
  productos: (req, res) => {
    res.render("./product/productos", { productos });
  },

  detail: (req, res) => {
    const producto = productos.find((p) => p.id == req.params.id);
    res.render("./product/productoDetail", { producto });
  },

  create: (req, res) => {
    res.render("./product/productoCreate");
  },

  created: (req, res) => {
    const newId = productos.reduce((maxId, objeto) => Math.max(maxId, objeto.id), -1) + 1;

    // Obtén los valores del formulario de la solicitud
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const color = req.body.color;
    const cuotas = parseFloat(req.body.cuotas);
    const precio = parseFloat(req.body.precio);
    const descuento = parseFloat(req.body.descuento);
    const imagePath = req.file ? `/img/product/${req.file.filename}` : null;

    // Calcula los valores basados en los datos del formulario
    const precioConDescuento = precio * descuento / 100;
    const precioCuotas = precioConDescuento / cuotas;

    // Crea el nuevo producto con los valores calculados y del formulario
    const newProduct = {
        id: newId,
        nombre: nombre,
        descripcion: descripcion,
        color: color,
        cuotas: cuotas,
        precio: precio,
        descuento: descuento,
        precioConDescuento: precioConDescuento,
        precioCuotas: precioCuotas,
        categoria: req.body.categoria,
        images: imagePath,
    };

    // Agrega el nuevo producto al array de productos
    productos.push(newProduct);

    // Convierte a JSON y guarda en el archivo
    const newProductJson = JSON.stringify(productos);
    fs.writeFileSync("./data/productos.json", newProductJson);

    // Redirige a la página de productos
    res.redirect("/productos");
},

  edit: (req, res) => {
    const producto = productos.find((p) => p.id == req.params.id);
    res.render("./product/productoUpdate", { producto });
  },

  update: (req, res) => {
    const cuotas = parseFloat(req.body.cuotas);
    const precio = parseFloat(req.body.precio);
    const descuento = parseFloat(req.body.descuento);
    const imagePath = req.file ? `/img/product/${req.file.filename}` : null;

    if (isNaN(cuotas) || isNaN(precio) || isNaN(descuento)) {
      return res.status(400).send("Valores no válidos");
    }

    const updateProduct = productos.map((elemento) => {
      if (elemento.id == req.params.id) {
        elemento.nombre = req.body.nombre || elemento.nombre;
        elemento.descripcion = req.body.descripcion || elemento.descripcion;
        elemento.color = req.body.color || elemento.color;
        elemento.cuotas = cuotas;
        elemento.precio = precio;
        elemento.descuento = descuento;
        elemento.precioConDescuento = (precio * descuento) / 100 || null;
        elemento.precioCuotas = elemento.precioConDescuento / cuotas || null;
        elemento.categoria = req.body.categoria || elemento.categoria;
        elemento.images = imagePath
      }
      return elemento;
    });

    if (!updateProduct.some((producto) => producto.id == req.params.id)) {
      return res.status(404).send("Producto no encontrado");
    }

    const newProductJson = JSON.stringify(updateProduct);

    fs.writeFileSync("./data/productos.json", newProductJson);

    res.redirect("/productos");
  },

  delete: (req, res) => {
    res.render("./product/productoDelete", { productos });
  },

  erased: (req, res) => {
    const deleteProduct = productos.filter((elemento) => elemento.id != req.params.id);
    const newProductJson = JSON.stringify(deleteProduct);
    fs.writeFileSync("./data/productos.json", newProductJson);
    res.redirect("/productos");
  },
};

module.exports = controller;
