//requires de modulos
const express = require("express");
const path = require("path");

//requires de rutas
const indexRouter = require("./routes/indexRouter");
const productosRouter = require("./routes/productosRouter")
const usersRouter = require("./routes/usersRouter")
const carritoRouter = require("./routes/carritoRouter")

//creacion de servidor
const app = express();

//path
const publicPath = path.resolve(__dirname, "/public");
app.use(express.static("public"));

//alta de servidor puerto 3030
app.listen(3030, () => console.log("El puerto de inicio es: 3030"));

//Configuracion motor de plantillas-EJS
app.set("view engine", "ejs");

//home
app.get("/", indexRouter);

//carrito
app.get("/carrito", carritoRouter)
//users
app.get("/login", usersRouter);
app.get("/register", usersRouter)
//productos
app.get("/productos", productosRouter)
app.get("/productos/:id", productosRouter)
//registro

