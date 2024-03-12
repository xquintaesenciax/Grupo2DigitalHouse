const db = require("../../database/models");

module.exports = {
  list: (req, res) => {
    let dataCategory = [];
    let dataProduct = [];
    db.categoria
      .findAll()
      .then((categorys) => {
        // Mapear cada categoría
        const promises = categorys.map((category) => {
          return db.producto
            .count({
              where: {
                id_categoria: category.id_categoria,
              },
            })
            .then((productsCount) => {
              // Agregar datos de la categoría al array
              dataCategory.push({
                nameCategory: category.nombre_categoria,
                amountProduct: productsCount,
              });
            });
        });

        // Esperar a que todas las promesas se resuelvan antes de continuar
        return Promise.all(promises);
      })
      .then(() => {
        // Después de obtener la cantidad de productos por categoría, obtener la lista de productos
        return db.producto.findAll({ include: [{ association: "category" }] });
      })
      .then((products) => {
        const baseUrl = `${req.protocol}://${req.headers.host}`;

        // Mapear cada producto
        for (const product of products) {
          dataProduct.push({
            id: product.id,
            name: product.nombre,
            description: product.descripcion,
            relations: [
              {
                id: product.id_categoria,
                nameCategory: product.category.nombre_categoria,
              },
            ],
            detail: baseUrl + "/api/products/" + product.id,
            img: baseUrl + product.images,
          });
        }

        // Enviar la respuesta JSON
        return res.json({
          countByCategory: dataCategory,
          count: products.length,
          products: dataProduct,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
      });
  },

  detail: (req, res) => {
    db.producto
      .findByPk(req.params.id, { include: [{ association: "category" }] })
      .then((producto) => {
        const baseUrl = `${req.protocol}://${req.headers.host}`;
        return res.json({
          id: producto.id,
          name: producto.nombre,
          description: producto.descripcion,
          color: producto.color,
          cuotas: producto.cuotas,
          precio: producto.precio,
          precioConDescuento: producto.precioConDescuento,
          descuento: producto.descuento,
          precioCuotas: producto.precioCuotas,
          relations: [
            {
              id: producto.id_categoria,
              nameCategory: producto.category.nombre_categoria,
            },
          ],
          imagesURL: baseUrl + producto.images,
        });
      });
  },
};
