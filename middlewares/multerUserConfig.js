const multer = require('multer');
const path = require('path');
const fs = require("fs")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'public/img/users/uploads'; // Ruta relativa a tu directorio de trabajo
    // Crea las carpetas necesarias si no existen
    const fullPath = path.join(__dirname, uploadPath);
    fs.mkdirSync(fullPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, 'profile-pic-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;