import { useState } from 'react';

export default function FormularioAuditoria({ onSubmit, initialData = {} }) {
  const [titulo, setTitulo] = useState(initialData.titulo || '');
  const [descricao, setDescricao] = useState(initialData.descricao || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ titulo, descricao });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
      <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      <button type="submit">Salvar</button>
    </form>
  );
}