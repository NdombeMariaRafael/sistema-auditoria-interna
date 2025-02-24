const express = require('express');
const router = express.Router();
const { listarAuditorias, criarAuditoria, getAuditoriaById, atualizarAuditoria } = require('../models/Auditoria');

router.get('/', async (req, res) => {
  const auditorias = await listarAuditorias();
  res.json(auditorias);
});

router.post('/', async (req, res) => {
  const { titulo, descricao } = req.body;
  const id = await criarAuditoria({ titulo, descricao });
  res.json({ id });
});

router.get('/:id', async (req, res) => {
  const auditoria = await getAuditoriaById(req.params.id);
  res.json(auditoria);
});

router.put('/:id', async (req, res) => {
  const { titulo, descricao } = req.body;
  await atualizarAuditoria(req.params.id, { titulo, descricao });
  res.json({ success: true });
});

module.exports = router;