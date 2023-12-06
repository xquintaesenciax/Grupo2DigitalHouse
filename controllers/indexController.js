const fs = require("fs");
const data = fs.readFileSync("./data/productos.json");
const productos = JSON.parse(data);
const controller = {
  index: (req, res) => {
    res.render("index", { productos: productos });
  },
};

module.exports = controller;
