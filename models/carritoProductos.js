module.exports = (sequelize, DataTypes) => {
  const CarritoProductos = sequelize.define("CarritoProductos", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    id_carrito: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return CarritoProductos;
};
