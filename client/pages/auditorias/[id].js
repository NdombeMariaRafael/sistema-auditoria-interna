import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuditoriaById } from '../../utils/api';

export default function AuditoriaDetalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [auditoria, setAuditoria] = useState(null);

  useEffect(() => {
    if (id) {
      getAuditoriaById(id).then(setAuditoria);
    }
  }, [id]);

  if (!auditoria) return <p>Loading...</p>;

  return (
    <div>
      <h1>{auditoria.titulo}</h1>
      <p>{auditoria.descricao}</p>
    </div>
  );
}