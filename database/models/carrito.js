module.exports = (sequelize, datatype) => {
    let alias = "carrito";
  
    let cols = {
      id: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cantidad_productos: {
        type: datatype.INTEGER,
      },
      precio_total: {
        type: datatype.DECIMAL,
      },
    };
  
    let config = {
      tableName: "carritos",
      timestamps: false,
    };
  
    let Carrito = sequelize.define(alias, cols, config);
  
    Carrito.associate = (models) => {
        Carrito.belongsTo(models.user, {
            as: 'usuario',
            foreignKey: 'id_usuario'
          });
        
          // Relación con Productos a través de la tabla pivot CarritoProducts
          Carrito.belongsToMany(models.producto, {
            through: 'carrito_producto',
            as: 'productos',
            foreignKey: 'id_carrito'
          });
      };
    
  
    return Carrito;
  };