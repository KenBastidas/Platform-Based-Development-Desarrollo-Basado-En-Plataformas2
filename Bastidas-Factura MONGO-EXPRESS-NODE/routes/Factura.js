// Rutas para producto
const express = require('express');
const router = express.Router();
const facturaControllers = require('../controllers/facturaControllers');

// api/productos
router.post('/',facturaControllers.crearFactura);
router.get('/', facturaControllers.obtenerFacturas);
router.put('/:id', facturaControllers.actualizarFactura);
router.get('/:id', facturaControllers.obtenerFactura);
router.delete('/:id', facturaControllers.eliminarFactura);

module.exports = router;