const productos = require("../products/products");
const controller = {
  index: (req, res) => {
    res.render("index", { productos: productos });
  },
};

module.exports = controller;
