//const fs = require("fs");
//const data = fs.readFileSync("./data/users.json");
//const users = JSON.parse(data);
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const db = require("../database/models");
const Op = db.Sequelize.Op;

const controller = {
  login: (req, res) => {
    if (!req.session.user) {
      res.render("./user/login");
    } else {
      res.redirect("/");
    }
  },
  log:  async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await db.user.findOne({ where: { email: email } });

      if (user) {
        const check = await bcrypt.compare(password, user.password);
        if (check) {
          req.session.user = user;
          return res.redirect("/");
        }
      }

      const error = "Email o contraseña incorrectos.";
      res.render("./user/login", { error, old: req.body });
    } catch (error) {
      console.error("Error en la autenticación:", error);
      res.status(500).send("Error interno del servidor");
    }
  },
  register: (req, res) => {
    res.render("./user/register");
  },
  regist: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Si hay errores de validación, renderizamos la vista de registro con los errores
        return res.render("./user/register", { errors: errors.array(), old: req.body });
      }
  
      const imagePath = req.file ? `/img/users/uploads/${req.file.filename}` : "/img/users/perfil-pordefecto.png";
  
      const { nombre, apellido, email, username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
  
      await db.user.create({
        nombre: nombre,
        apellido: apellido,
        email: email,
        username: username,
        password: hashedPassword,
        profilePic: imagePath,
      });
  
      req.session.user = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        username: username,
        profilePic: imagePath,
        admin: false,
      };
  
      res.render("./user/login", { email: email, errors: null });
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      res.status(500).send("Error interno del servidor");
    }
  },

  profile: (req, res) => {
    // Verifica si el usuario está autenticado
    if (req.session.user) {
      const user = req.session.user;
      res.render("./user/profile", { user });
    } else {
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      res.redirect("/user/login");
    }
  },
  logout: (req, res) => {
    // Destruir la sesión
    req.session.destroy((err) => {
      if (err) {
        console.error("Error al cerrar sesión:", err);
        res.status(500).send("Error interno del servidor al cerrar sesión");
      } else {
        // Redirigir a la página de inicio o a donde desees después de cerrar sesión
        res.redirect("/");
      }
    });
  },
  edit: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        // Si hay errores, renderizar la vista del perfil nuevamente con los errores
        return res.render('./user/profile', { errors: errors.array(), user: req.session.user });
      }
  
      const user = req.session.user;
  
      // Verificar si el usuario está definido
      if (user) {
        const { nombre, apellido, email, username, password } = req.body;
  
        // Actualizar los datos del usuario en la sesión
        user.nombre = nombre;
        user.apellido = apellido;
        user.email = email;
        user.username = username;
  
        if (password) {
          user.password = bcrypt.hashSync(password, 10);
        }
  
        if (req.file) {
          const imagePath = `/img/users/uploads/${req.file.filename}`;
          user.profilePic = imagePath;
        }
  
        // Guardar los cambios en la sesión
        req.session.user = user;
  
        // Actualizar los datos del usuario en la base de datos
        await db.user.update(
          {
            nombre: user.nombre,
            apellido: user.apellido,
            email: user.email,
            username: user.username,
            password: user.password,
            profilePic: user.profilePic,
          },
          {
            where: { id: user.id },
          }
        );
  
        return res.redirect("/user/profile");
      } else {
        console.error("El objeto 'user' no está definido.");
        return res.status(500).send("Error interno del servidor al actualizar el perfil");
      }
    } catch (error) {
      console.error("Error al actualizar el perfil:", error);
      console.error(error.stack);
      return res.status(500).send("Error interno del servidor al actualizar el perfil");
    }
},
};




module.exports = controller;
