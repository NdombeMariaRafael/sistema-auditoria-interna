import { useEffect, useState } from 'react';
import { listarAuditorias } from '../../utils/api';

export default function ListarAuditorias() {
  const [auditorias, setAuditorias] = useState([]);

  useEffect(() => {
    listarAuditorias().then(setAuditorias);
  }, []);

  return (
    <div>
      <h1>Auditorias</h1>
      <ul>
        {auditorias.map((auditoria) => (
          <li key={auditoria.id}>
            <a href={`/auditorias/${auditoria.id}`}>{auditoria.titulo}</a>
          </li>
        ))}
      </ul>
      <a href="/auditorias/criar">Criar Nova Auditoria</a>
    </div>
  );
}