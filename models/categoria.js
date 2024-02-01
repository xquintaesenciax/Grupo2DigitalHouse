module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    // Definir relaciones
    Categoria.hasMany(sequelize.models.Producto, { foreignKey: 'id_categoria' });
  
    return Categoria;