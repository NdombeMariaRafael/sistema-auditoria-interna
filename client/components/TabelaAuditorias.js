import Link from 'next/link';

export default function TabelaAuditorias({ auditorias }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {auditorias.map((auditoria) => (
          <tr key={auditoria.id}>
            <td>{auditoria.titulo}</td>
            <td>{auditoria.descricao}</td>
            <td>
              <Link href={`/auditorias/${auditoria.id}`}>Ver</Link>
              <Link href={`/auditorias/editar/${auditoria.id}`}>Editar</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}