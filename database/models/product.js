module.exports = (sequelize, datatype) => {
  let alias = "producto";

  let cols = {
    id: {
      type: datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    images: {
      type: datatype.STRING,
    },
    nombre: {
      type: datatype.STRING,
    },
    descripcion: {
      type: datatype.STRING,
    },
    color: {
      type: datatype.STRING,
    },
    cuotas: {
      type: datatype.INTEGER,
    },
    precio: {
      type: datatype.DECIMAL,
    },
    precioConDescuento: {
      type: datatype.DECIMAL,
    },
    descuento: {
      type: datatype.INTEGER,
    },
    precioCuotas: {
      type: datatype.DECIMAL,
    },
    id_categoria: {
      type: datatype.INTEGER,
    },
  };

  let config = {
    tableName: "productos",
    timestamps: false,
  };

  let product = sequelize.define(alias, cols, config);

  product.associate = (models) => {
    product.belongsTo(models.categoria, {
      as: "category",
      foreignKey: "id_categoria",
    });
  };

  return product;
};
