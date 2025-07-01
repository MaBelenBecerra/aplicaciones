const express = require('express');
const router = express.Router();
const { obtenerProductos } = require('../controllers/productController');

router.get('/', obtenerProductos);

module.exports = router;