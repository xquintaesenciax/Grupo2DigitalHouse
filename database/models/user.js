module.exports = (sequelize, datatype) => {
    let alias = "user";
  
    let cols = {
      id: {
        type: datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: datatype.STRING,
        allowNull: false,
      },
      apellido: {
        type: datatype.STRING,
        allowNull: false,
      },
      email: {
        type: datatype.STRING,
        allowNull: false,
      },
      username: {
        type: datatype.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: datatype.STRING,
        allowNull: false,
      },
      profilePic: {
        type: datatype.INTEGER,
        defaultValue: "/img/users/perfil-pordefecto.png",
      },
      admin: {
        type: datatype.BOOLEAN,
        defaultValue: false,
      },
      id_carrito: {
        type: datatype.INTEGER,
      }
    };
  
    let config = {
      tableName: "usuarios",
      timestamps: false,
    };
  
    let User = sequelize.define(alias, cols, config);
  
    User.associate = (models) => {
        User.hasOne(models.carrito, {
            as: 'carrito',
            foreignKey: 'id_usuario'
          });
    };
  
    return User;
  };