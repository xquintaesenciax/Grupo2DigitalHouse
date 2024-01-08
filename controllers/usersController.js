const fs = require("fs");
const data = fs.readFileSync("./data/users.json");
const users = JSON.parse(data);
const { validationResult }= require("express-validator")
const bcrypt = require("bcryptjs")

const controller = {
  login: (req, res) => {
    res.render("./user/login");
  },
  log: (req, res) => {
    const user = users.find((user) => user.email === req.body.email);

    if (user) {
      let check = bcrypt.compareSync(req.body.password, user.password);
      if (check) {
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
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10),
        profilePic: req.file.filename,
      };
      users.push(newUser);
      let newUsersJson = JSON.stringify(users);
      fs.writeFileSync("./data/users.json", newUsersJson);
      res.redirect("/");
    } else {
      res.render("./user/register", { errors: errors.mapped(), old: req.body });
    }
  },
};

module.exports = controller;
