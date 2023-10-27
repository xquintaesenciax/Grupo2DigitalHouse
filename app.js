const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.resolve(__dirname,'/public');

app.use(express.static('public'));
app.listen(3030,()=>console.log('El puerto de inicio es: 3030'));


//home
app.get('/', (req,res)=>{
    res.sendFile(path.resolve('./views/index.html'))
})
//carrito
app.get('/carrito', (req,res)=>{
    res.sendFile(path.resolve('./views/carrito.html'))
})
//login
app.get('/login', (req,res)=>{
    res.sendFile(path.resolve('./views/login.html'))
})
//producto
app.get('/producto', (req,res)=>{
    res.sendFile(path.resolve('./views/producto.html'))
})
//registro
app.get('/registro', (req,res)=>{
    res.sendFile(path.resolve('./views/registro.html'))
})