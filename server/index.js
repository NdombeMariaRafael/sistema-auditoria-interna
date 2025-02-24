const express = require('express');
const cors = require('cors');
const auditoriasRouter = require('./routes/auditorias');
const usuariosRouter = require('./routes/usuarios');
const relatoriosRouter = require('./routes/relatorios');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auditorias', auditoriasRouter);
app.use('/api/usuarios', usuariosRouter);
app.use('/api/relatorios', relatoriosRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});