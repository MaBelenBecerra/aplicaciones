require('dotenv').config();
const cors = require('cors');
const express = require('express');

const usuarioRoutes = require('./routes/usuarioRoutes');
const productoRoutes = require('./routes/productoRoutes');
const pedidoRoutes = require('./routes/pedidoRoutes');
const blogRoutes = require('./routes/blogRoutes');
const reservaRoutes = require('./routes/reservaRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);
app.use('/pedidos', pedidoRoutes);
app.use('/blog', blogRoutes);
app.use('/reservas', reservaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});