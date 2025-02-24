const { firestore } = require('../config/firebase');

const listarAuditorias = async () => {
  const snapshot = await firestore.collection('auditorias').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const criarAuditoria = async (auditoria) => {
  const docRef = await firestore.collection('auditorias').add(auditoria);
  return docRef.id;
};

const getAuditoriaById = async (id) => {
  const doc = await firestore.collection('auditorias').doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

const atualizarAuditoria = async (id, auditoria) => {
  await firestore.collection('auditorias').doc(id).update(auditoria);
};

module.exports = { listarAuditorias, criarAuditoria, getAuditoriaById, atualizarAuditoria };