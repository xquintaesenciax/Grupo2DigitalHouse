module.exports = (sequelize, datatype) => {
    let alias = "carrito-product";
  
    let cols = {
      id: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_carrito: {
        type: datatype.INTEGER,
        allowNull: false,
      },
      id_product: {
        type: datatype.INTEGER,
        allowNull: false,
      },
    };
  
    let config = {
      tableName: "carrito_producto",
      timestamps: false,
    };
  
    let CarritoProducto = sequelize.define(alias, cols, config);
  
  
    return CarritoProducto;
  };