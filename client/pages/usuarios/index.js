import { useEffect, useState } from 'react';
import { listarUsuarios } from '../../utils/api';

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    listarUsuarios().then(setUsuarios);
  }, []);

  return (
    <div>
      <h1>Usuários</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            <a href={`/usuarios/${usuario.id}`}>{usuario.nome}</a>
          </li>
        ))}
      </ul>
      <a href="/usuarios/criar">Criar Novo Usuário</a>
    </div>
  );
}