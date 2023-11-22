//requires de modulos
const express = require("express");
const path = require("path");

//requires de rutas
const indexRouter = require("./routes/indexRouter");

//path
const publicPath = path.resolve(__dirname, "/public");
app.use(express.static("public"));

//creacion de servidor
const app = express();

//alta de servidor puerto 3030
app.listen(3030, () => console.log("El puerto de inicio es: 3030"));

//Configuracion motor de plantillas-EJS
app.set("view engine", "ejs");

//home
app.get("/", indexRouter);

//carrito
app.get("/carrito", (req, res) => {
  res.sendFile(path.resolve("./views/carrito.html"));
});
//login
app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./views/login.html"));
});
//producto
app.get("/producto", (req, res) => {
  res.sendFile(path.resolve("./views/producto.html"));
});
//registro
app.get("/registro", (req, res) => {
  res.sendFile(path.resolve("./views/registro.html"));
});
