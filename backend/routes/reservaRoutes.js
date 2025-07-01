const express = require('express');
const router = express.Router();
const { crearReserva } = require('../controllers/reservController');
const { identificarUsuario } = require('../middleware/identiUsuarioMiddleware');

router.post('/', identificarUsuario, crearReserva);

module.exports = router;