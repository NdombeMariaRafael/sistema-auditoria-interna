import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUsuarioById, atualizarUsuario } from '../../../utils/api';

export default function EditarUsuario() {
  const router = useRouter();
  const { id } = router.query;
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (id) {
      getUsuarioById(id).then((usuario) => {
        setNome(usuario.nome);
        setEmail(usuario.email);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await atualizarUsuario(id, { nome, email });
      router.push('/usuarios');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Editar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}