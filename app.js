//requires de modulos
require('dotenv').config();
const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

//CORS

const cors = require("cors");

//requires de rutas
const indexRouter = require("./routes/indexRouter");
const productosRouter = require("./routes/productosRouter");
const usersRouter = require("./routes/usersRouter");
const carritoRouter = require("./routes/carritoRouter");
const apisRouter = require("./routes/apisRouter");

//creacion de servidor
const app = express();

//configuracion body-parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS-->instalar cord (npm i cors)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Permitir solicitudes desde cualquier origen
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  ); // Métodos HTTP permitidos
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Encabezados permitidos
  next();
});

//path
const publicPath = path.resolve(__dirname, "/public");
app.use(express.static("public"));

// Configuración de cookie-parser y express-session
app.use(cookieParser());
app.use(
  session({
    secret: "velvet owo",
    resave: false,
    saveUninitialized: false,
    rolling: true, // Renovar la cookie en cada solicitud
  })
);

//alta de servidor puerto 3030
app.listen(3030, () => console.log("El puerto de inicio es: 3030"));

//Configuracion motor de plantillas-EJS
app.set("view engine", "ejs");

//Method override
app.use(methodOverride("_method"));

//home
app.get("/", indexRouter);

//carrito
app.get("/carrito", carritoRouter);
//users
app.use("/user", usersRouter);
// app.get("/login", usersRouter);
// app.post("/login", usersRouter);
// app.get("/register", usersRouter);
// app.post("/register", usersRouter);
// app.get("/profile", usersRouter);
// app.post("/editar-perfil", usersRouter);
// app.get("/log-out", usersRouter);

//PRODUCTOS
app.use("/productos", productosRouter);

// //crear
// app.get("/productos/create", productosRouter);
// app.post("/productos/created", productosRouter);
// //Actualizar y eliminar
// app.get("/productos/:id/edit", productosRouter);
// app.get("/productos/delete", productosRouter);
// app.put("/productos/:id", productosRouter);
// app.delete("/productos/:id", productosRouter);
// //<----------->
// app.get("/productos/:id", productosRouter);
//<----------->
//registro

//APIS

app.use("/api", apisRouter);

app.get("/dashboard", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build/index.html"));
});
app.get("/dashboard/:id", (req, res) => {
  res.sendFile(path.join(__dirname, "public/build/index.html"));
});
