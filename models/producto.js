// models/producto.js
module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_categoria: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Categoria', // Ajusta el nombre del modelo de la tabla referenciada
          key: 'id',
        },
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT, // Puedes ajustar el tipo según tus necesidades
        allowNull: true,
      },
      imagen: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      descuento: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      cuotas: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      precio_descuento: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      precio_cuotas: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Definir relaciones
    Producto.belongsTo(sequelize.models.Categoria, { foreignKey: 'id_categoria' });
    Producto.belongsToMany(sequelize.models.Carrito, { through: 'Carrito_Productos' });
  
    return Producto;
  };
  