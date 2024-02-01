module.exports = (sequelize, datatype) => {
  let alias = "categoria";

  let cols = {
    id: {
      type: datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: datatype.STRING,
    },
  };

  let config = {
    tableName: "categoria",
    timestamps: false,
  };

  let category = sequelize.define(alias, cols, config);

  category.associate = (models) => {
    category.hasMany(models.producto, {
      as: "products",
      foreignKey: "id",
    });
  };

  return category;
};
