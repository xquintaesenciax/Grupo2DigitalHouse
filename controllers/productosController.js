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
  created: function (req, res) {
    let newId = -1;

    for (const objeto of productos) {
      if (objeto.id > newId) {
        newId = objeto.id;
      }
    }
    newId++;
    let newProduct = {
      id: newId,
      images: "/img/product/camisa-hombre-1.jpg",
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      color: req.body.color,
      cuotas: req.body.cuotas,
      precio: req.body.precio,
      precioConDescuento: null,
      descuento: null,
      precioCuotas: null,
      categoria: req.body.categoria,
    };
    productos.push(newProduct);
    let newProductJson = JSON.stringify(productos);
    fs.writeFileSync("./data/productos.json", newProductJson);
    res.redirect("/");
  },
  edit: (req, res) => {
    let producto = productos.filter(
      (producto) => producto.id == req.params.id
    )[0];
    res.render("./product/productoUpdate", { producto: producto });
  },
  update: (req, res) => {
    const updateProduct = productos.map((elemento) => {
      if (elemento.id == req.params.id) {
        elemento.nombre = req.body.nombre;
        elemento.descripcion = req.body.descripcion;
        elemento.color = req.body.color;
        elemento.cuotas = req.body.cuotas;
        elemento.precio = req.body.precio;
        elemento.categoria = req.body.categoria;
        return elemento;
      } else {
        return elemento;
      }
    });
    console.log(updateProduct);
    let newProductJson = JSON.stringify(updateProduct);
    fs.writeFileSync("./data/productos.json", newProductJson);
    res.redirect("/");
  },
  delete: (req, res) => {
    res.render("./product/productoDelete", { productos: productos });
  },
  erased: (req, res) => {
    const deleteProduct = productos.filter(
      (elemento) => elemento.id != req.params.id
    );
    let newProductJson = JSON.stringify(deleteProduct);
    fs.writeFileSync("./data/productos.json", newProductJson);
    res.redirect("/");
  },
};

module.exports = controller;
