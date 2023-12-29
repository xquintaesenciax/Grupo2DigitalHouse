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
    for (let user of users) {
        if (user.email === req.body.email) {
          console.log(req.body.password, user.password)
          let check = bcrypt.compareSync(req.body.password, user.password);
          if (check){
            res.redirect("/");
          } else{
            res.send("errorxdxd")
          }}

}},
  register: (req, res) => {
    res.render("./user/register");
  },
  regist: (req, res) => {
    let errors = validationResult(req)
    if (errors.isEmpty()){
      let newUser = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, 10)
      };
      users.push(newUser);
      let newUsersJson = JSON.stringify(users);
      fs.writeFileSync("./data/users.json", newUsersJson);
      res.redirect("/");
    } else {
      console.log(errors.mapped())
      res.render("./user/register", {errors: errors.mapped(), old: req.body})
    }
  }
};

module.exports = controller;
