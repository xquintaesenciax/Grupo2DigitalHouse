module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      id_carrito: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Carrito', // Ajusta el nombre del modelo de la tabla referenciada
          key: 'id',
        },
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoria: {
        type: DataTypes.TINYINT,
        allowNull: false,
        validate: {
          isIn: [[0, 1]],
        },
      },
      imagen: {
        type: DataTypes.STRING, // Puedes ajustar el tipo según tus necesidades
        allowNull: true,
      },
    });
  
    // Definir relaciones
    User.belongsTo(sequelize.models.Carrito, { foreignKey: 'id_carrito' });
  
    return User;
  };
  