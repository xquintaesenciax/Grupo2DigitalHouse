const {check} = require("express-validator")
//const fs = require("fs");
//const data = fs.readFileSync("./data/users.json");
//const users = JSON.parse(data);
const db = require("../database/models");

let validateRegister = [
    check("nombre").notEmpty().withMessage("Debes ingresar tu nombre."),
    check("apellido").notEmpty().withMessage("Debes ingrear tu apellido."),
    check("email")
        .isEmail().withMessage("Debes ingresar un email válido.")
        .custom(async (value) => {
            const user = await db.user.findOne({ where: { email: value } });
            if (user) {
                throw new Error("El email ya está en uso.");
            }
            return true;
        }),
    check("username")
        .notEmpty().withMessage("Debes ingresar un nombre de usuario.")
        .custom(async (value) => {
            const user = await db.user.findOne({ where: { username: value } });
            if (user) {
                throw new Error("El nombre de usuario ya está en uso.");
            }
            return true;
        }),
    check("password")
        .notEmpty().withMessage("Debes ingresar una contraseña.")
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres.")
];



module.exports = validateRegister;