const fs = require("fs");
const data = fs.readFileSync("./data/users.json");
const users = JSON.parse(data);
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const controller = {
  login: (req, res) => {
    res.render("./user/login");
  },
  log: (req, res) => {
    const user = users.find((user) => user.email === req.body.email);

    if (user) {
      let check = bcrypt.compareSync(req.body.password, user.password);
      if (check) {
        // Guardar el usuario en la sesión
        req.session.user = user;
        res.redirect("/");
      } else {
        let error = "Email o contraseña incorrectos.";
        res.render("./user/login", { error, old: req.body });
      }
    } else {
      let error = "Email o contraseña incorrectos.";
      res.render("./user/login", { error, old: req.body });
    }
  },
  register: (req, res) => {
    res.render("./user/register");
  },
  regist: (req, res) => {
    const imagePath = req.file ? `/img/users/uploads/${req.file.filename}` : "/img/users/perfil-pordefecto.png";
    let errors = validationResult(req);
  
    if (errors.isEmpty()) {
      let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        profilePic: imagePath,
        admin: false,
      };
  
      // Agregar el nuevo usuario al array de usuarios
      users.push(newUser);
  
      // Guardar el array actualizado en el archivo JSON
      let newUsersJson = JSON.stringify(users);
      fs.writeFileSync("./data/users.json", newUsersJson);
  
      req.session.user = newUser;
  
      // Pasar el email como variable al renderizar la vista
      res.render("./user/login", { email: req.body.email });
    } else {
      res.render("./user/register", { errors: errors.mapped(), old: req.body });
    }
  },
  profile: (req, res) => {
    // Verifica si el usuario está autenticado
    if (req.session.user) {
      const user = req.session.user;
      res.render("./user/profile", { user });
    } else {
      // Redirige a la página de inicio de sesión si el usuario no está autenticado
      res.redirect("/login");
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
  edit: (req, res) => {
    try {
        const user = req.session.user;

        // Verificar si el usuario está definido
        if (user) {
            const { nombre, apellido, email, username } = req.body;

            // Actualizar los datos del usuario en la sesión
            user.nombre = nombre;
            user.apellido = apellido;
            user.email = email;
            user.username = username;

            if (req.body.password) {
                // Actualizar la contraseña si se proporciona una nueva
                user.password = bcrypt.hashSync(req.body.password, 10);
            }

            if (req.file) {
                // Actualizar la imagen de perfil si se proporciona una nueva
                const imagePath = `/img/users/uploads/${req.file.filename}`;
                user.profilePic = imagePath;
            }

            // Actualizar el usuario en el array de usuarios
            const userIndex = users.findIndex(u => u.email === user.email);
            users[userIndex] = user;

            // Guardar el array actualizado en el archivo JSON
            fs.writeFileSync("./data/users.json", JSON.stringify(users));

            req.session.user = user;

            return res.redirect("/profile");
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

