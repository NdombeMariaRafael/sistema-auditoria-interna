import { useState } from 'react';
import { useRouter } from 'next/router';
import { criarAuditoria } from '../../utils/api';

export default function CriarAuditoria() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarAuditoria({ titulo, descricao });
      router.push('/auditorias');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Criar Auditoria</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
}