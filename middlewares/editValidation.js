const { check } = require("express-validator");
const db = require("../database/models");

const validateProfileUpdate = (req, res, next) => {
  const errors = [];
  
  // Reglas de validación comunes
  errors.push(check("nombre").notEmpty().withMessage("Debes ingresar tu nombre."));
  errors.push(check("apellido").notEmpty().withMessage("Debes ingresar tu apellido."));
  errors.push(check("email").isEmail().withMessage("Debes ingresar un email válido."));
  errors.push(check("username").notEmpty().withMessage("Debes ingresar un nombre de usuario."));
  
  // Validación de email único
  errors.push(check("email").custom(async (value) => {
    const user = await db.user.findOne({ where: { email: value } });
    if (user && user.id !== req.session.user.id) {
      throw new Error("El email ya está en uso por otro usuario.");
    }
    return true;
  }));
  
  // Validación de nombre de usuario único
  errors.push(check("username").custom(async (value) => {
    const user = await db.user.findOne({ where: { username: value } });
    if (user && user.id !== req.session.user.id) {
      throw new Error("El nombre de usuario ya está en uso por otro usuario.");
    }
    return true;
  }));

  // Verificar si se ingresó una nueva contraseña y agregar la regla de validación si es así
  if (req.body.password && req.body.password.trim() !== "") {
    errors.push(check("password").isLength({ min: 8 }).withMessage("La contraseña debe tener al menos 8 caracteres."));
  }

  // Ejecutar todas las reglas de validación
  const validationPromises = errors.map((error) => error.run(req));
  Promise.all(validationPromises)
    .then(() => {
      const validationResult = require("express-validator").validationResult;
      const result = validationResult(req);
      if (!result.isEmpty()) {
        // Si hay errores, enviar los errores al siguiente middleware
        return res.render("./user/profile", { errors: result.array(), user: req.session.user });
      }
      // Si no hay errores, continuar al siguiente middleware
      next();
    })
    .catch(next);
};

module.exports = validateProfileUpdate;
