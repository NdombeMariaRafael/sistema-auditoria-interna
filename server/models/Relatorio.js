const { listarAuditorias, listarUsuarios } = require('./Auditoria');

const gerarRelatorio = async () => {
  const auditorias = await listarAuditorias();
  const usuarios = await listarUsuarios();
  return { auditorias, usuarios };
};

module.exports = { gerarRelatorio };