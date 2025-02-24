import { auth, firestore } from './firebase';

export const login = async (email, password) => {
  await auth.signInWithEmailAndPassword(email, password);
};

export const logout = async () => {
  await auth.signOut();
};

export const criarAuditoria = async (auditoria) => {
  const docRef = await firestore.collection('auditorias').add(auditoria);
  return docRef.id;
};

export const listarAuditorias = async () => {
  const snapshot = await firestore.collection('auditorias').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getAuditoriaById = async (id) => {
  const doc = await firestore.collection('auditorias').doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const atualizarAuditoria = async (id, auditoria) => {
  await firestore.collection('auditorias').doc(id).update(auditoria);
};

export const criarUsuario = async (usuario) => {
  const { user } = await auth.createUserWithEmailAndPassword(usuario.email, usuario.senha);
  await firestore.collection('usuarios').doc(user.uid).set({
    nome: usuario.nome,
    email: usuario.email,
  });
};

export const listarUsuarios = async () => {
  const snapshot = await firestore.collection('usuarios').get();
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getUsuarioById = async (id) => {
  const doc = await firestore.collection('usuarios').doc(id).get();
  return doc.exists ? { id: doc.id, ...doc.data() } : null;
};

export const atualizarUsuario = async (id, usuario) => {
  await firestore.collection('usuarios').doc(id).update(usuario);
};

export const gerarRelatorio = async () => {
  const auditorias = await listarAuditorias();
  const usuarios = await listarUsuarios();
  return { auditorias, usuarios };
};

export const atualizarConfiguracoes = async (configuracoes) => {
  await firestore.collection('configuracoes').doc('principal').set(configuracoes, { merge: true });
};