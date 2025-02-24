const { firestore } = require('../config/firebase');

const listarUsuarios = async () => {
  const snapshot = await firestore.collection('usuarios').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

const criarUsuario = async (usuario) => {
  const { user } = await auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  await firestore.collection('usuarios').doc(user.uid).set({
    nome: usuario.nome,
    email: usuario.email,
  });
};

const getUsuarioById = async (id) => {
  const doc = await firestore.collection('usuarios').doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

const atualizarUsuario = async (id, usuario) => {
  await firestore.collection('usuarios').doc(id).update(usuario);
};

module.exports = { listarUsuarios, criarUsuario, getUsuarioById, atualizarUsuario };