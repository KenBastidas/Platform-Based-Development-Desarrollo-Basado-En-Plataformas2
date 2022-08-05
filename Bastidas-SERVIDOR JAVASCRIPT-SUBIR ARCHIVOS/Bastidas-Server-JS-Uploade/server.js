const express = require('express')
const bodyParser= require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}))
//Declarando rutas
var firstclient = require('./routes/clienteKen1');
var secondclient = require('./routes/clienteKen2');
app.use('/', firstclient);
app.use('/', secondclient);
//abrir en su navegador localhost:3000
app.listen(3000, () => console.log('Abrir en su navegador: Localhost:3000'));