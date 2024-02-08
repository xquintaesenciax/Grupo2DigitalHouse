const {check} = require("express-validator")
//const fs = require("fs");
//const data = fs.readFileSync("./data/users.json");
//const users = JSON.parse(data);
const db = require("../database/models");

let validateRegister = [
    check("nombre").notEmpty().withMessage("Debes ingresar tu nombre.").isLength({ min: 2 }).withMessage("El nombre debe tener al menos 2 caracteres."),
    check("apellido").notEmpty().withMessage("Debes ingrear tu apellido.").isLength({ min: 2 }).withMessage("El apellido debe tener al menos 2 caracteres."),
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
        .isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres."),
    check("image").custom((value, { req }) => {
        // Verificar si hay una imagen subida
         if (req.file) {
            // Verificar el formato de la imagen (jpeg, jpg, png)
            const allowedFormats = /jpeg|jpg|png|gif/;
            if (!allowedFormats.test(req.file.mimetype)) {
                throw new Error("El formato de la imagen no es válido. Solo se permiten archivos jpeg, jpg, png o gif.");
            }
        }
        // Si no se sube una imagen, no hay ningún error
        return true;
    })
];



module.exports = validateRegister;