import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuditoriaById, atualizarAuditoria } from '../../../utils/api';

export default function EditarAuditoria() {
  const router = useRouter();
  const { id } = router.query;
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  useEffect(() => {
    if (id) {
      getAuditoriaById(id).then((auditoria) => {
        setTitulo(auditoria.titulo);
        setDescricao(auditoria.descricao);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await atualizarAuditoria(id, { titulo, descricao });
      router.push('/auditorias');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Editar Auditoria</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
}