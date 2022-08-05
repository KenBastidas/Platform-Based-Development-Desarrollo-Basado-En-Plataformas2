const mongoose = require('mongoose');

const FacturaSchema = mongoose.Schema({
        "cliente" : {
            "tipo" : String,
            "apellido": String,
            "nombre": String,
            "ciudad": String,
            "cuit": String
        },
        "tipodePago": String,
        "FechaEmision": Date,
        "item": {
            "album":String,
            "año": Number,
            "cantidad" : Number,
            "precio": Number,
            "artista": String
        },
        "nroFactura": String,
        "intereses": String
});

module.exports = mongoose.model('Factura', FacturaSchema);