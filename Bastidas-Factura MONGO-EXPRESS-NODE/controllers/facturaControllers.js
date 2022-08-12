const Factura = require("../models/factura");

exports.crearFactura = async (req, res) => {
    try {
        let factura;
        // Creamos nuestra Factura
        factura = new Factura(req.body);
        await factura.save();
        res.send(factura);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
exports.obtenerFacturas = async (req, res) => {
    try {
        const facturas = await Factura.find();
        res.json(facturas)
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.actualizarFactura = async (req, res) => {
    try {
        const { cliente, tipodePago,FechaEmisionategoria, item, nroFactura,intereses } = req.body;
        let factura = await Factura.findById(req.params.id);
        if(!factura) {
            res.status(404).json({ msg: 'No existe la factura' })
        }
        factura.cliente = cliente;
        factura.tipodePago= tipodePago;
        factura.FechaEmisionategoria=FechaEmisionategoria;
        factura.item=item;
        factura.nroFactura=nroFactura;
        factura.intereses=intereses;
        factura = await Factura.findOneAndUpdate({ _id: req.params.id },factura, { new: true} )
        res.json(factura);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerFactura = async (req, res) => {
    try {
        let factura = await Factura.findById(req.params.id);
        if(!factura) {
            res.status(404).json({ msg: 'No existe la factura' })
        }
        res.json(factura);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarFactura = async (req, res) => {
    try {
        let factura = await Factura.findById(req.params.id);
        if(!factura) {
            res.status(404).json({ msg: 'No existe la factura'})
        }      
        await Factura.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'factura eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}
