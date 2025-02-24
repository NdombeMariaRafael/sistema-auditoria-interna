const express = require('express');
const router = express.Router();
const { gerarRelatorio } = require('../models/Relatorio');

router.get('/', async (req, res) => {
  const relatorio = await gerarRelatorio();
  res.json(relatorio);
});

module.exports = router;