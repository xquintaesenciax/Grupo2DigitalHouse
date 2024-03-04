module.exports = (sequelize, datatype) => {
  let alias = "categoria";

  let cols = {
    id_categoria: {
      type: datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre_categoria: {
      type: datatype.STRING,
    },
  };

  let config = {
    tableName: "categorias",
    timestamps: false,
  };

  let category = sequelize.define(alias, cols, config);

  category.associate = (models) => {
    category.hasMany(models.producto, {
      as: "products",
      foreignKey: "id_categoria",
    });
  };

  return category;
};
