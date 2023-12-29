const {check} = require("express-validator")
const fs = require("fs");
const data = fs.readFileSync("./data/users.json");
const users = JSON.parse(data);

let validateRegister = [
    check("nombre").notEmpty().withMessage("Debes ingresar tu nombre."),
    check("apellido").notEmpty().withMessage("Debes ingrear tu apellido."),
    check("email").isEmail().withMessage("Debes ingresar un email válido."),
    check("username").notEmpty().withMessage("Debes ingresar un nombre de usuario."),
    check("password").notEmpty().withMessage("Debes ingresar una contraseña.")
    .isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres.")
]

module.exports = validateRegister