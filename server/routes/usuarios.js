const express = require('express');
const router = express.Router();
const { listarUsuarios, criarUsuario, getUsuarioById, atualizarUsuario } = require('../models/Usuario');

router.get('/', async (req, res) => {
  const usuarios = await listarUsuarios();
  res.json(usuarios);
});

router.post('/', async (req, res) => {
  const { nome, email, senha } = req.body;
  await criarUsuario({ nome, email, senha });
  res.json({ success: true });
});

router.get('/:id', async (req, res) => {
  const usuario = await getUsuarioById(req.params.id);
  res.json(usuario);
});

router.put('/:id', async (req, res) => {
  const { nome, email } = req.body;
  await atualizarUsuario(req.params.id, { nome, email });
  res.json({ success: true });
});

module.exports = router;