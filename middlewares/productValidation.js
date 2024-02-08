const {check} = require("express-validator")
const db = require("../database/models");

let validateProduct = [
    check("nombre").notEmpty().withMessage("Debes ingresar un nombre.").isLength({ min: 5 }).withMessage("El nombre debe tener al menos 5 caracteres."),
    check("descripcion").notEmpty().withMessage("Debes ingresar una descripcion.").isLength({ min: 20 }).withMessage("La descripcion debe tener al menos 20 caracteres."),
    check("image").custom((value, { req }) => {
        // Verificar si hay una imagen subida
         if (req.file) {
            // Verificar el formato de la imagen (jpeg, jpg, png)
            const allowedFormats = /jpeg|jpg|png|gif|webp/;
            if (!allowedFormats.test(req.file.mimetype)) {
                throw new Error("El formato de la imagen no es válido. Solo se permiten archivos jpeg, jpg, png, gif o webp.");
            }
        }else {
            throw new Error("Debes seleccionar una imagen");
        }
        // Si no se sube una imagen, no hay ningún error
        return true;
    }),
    check("categoria").notEmpty().withMessage("Debes seleccionar una categoría."),
    check("precio").notEmpty().withMessage("Debes ingresar un precio."),
];



module.exports = validateProduct;