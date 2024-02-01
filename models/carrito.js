module.exports = (sequelize, DataTypes) => {
    const Carrito = sequelize.define('Carrito', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precio: {
        type: DataTypes.FLOAT, 
        allowNull: false,
      },
    });
  
    // Definir relaciones
    Carrito.belongsToMany(sequelize.models.Producto, { through: 'Carrito_Productos' });
  
    return Carrito;
  };
  