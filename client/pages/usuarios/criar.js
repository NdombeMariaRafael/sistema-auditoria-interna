import { useState } from 'react';
import { useRouter } from 'next/router';
import { criarUsuario } from '../../utils/api';

export default function CriarUsuario() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarUsuario({ nome, email, senha });
      router.push('/usuarios');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}