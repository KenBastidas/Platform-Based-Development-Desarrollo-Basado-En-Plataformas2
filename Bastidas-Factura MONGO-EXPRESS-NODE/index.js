//declarando constantes express y mongoose
const express = require('express');
const mongoose =require('mongoose');
//configurar express ap || set up express app
const app = express();
//connect to mongo db
mongoose.connect('mongodb://localhost:27017/FacturaBastidas')
//Indicar el fromato json para el archivo
app.use(express.json());
//Indicando ruta de la api y ruta acerca de routes y el llamado de metodos en Factura
app.use('/api/facturas', require('./routes/Factura'));
//puerto
app.listen(4000, () => {
    console.log('El servidor esta corriendo perfectamente')
})