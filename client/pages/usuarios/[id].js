import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUsuarioById } from '../../utils/api';

export default function UsuarioDetalhes() {
  const router = useRouter();
  const { id } = router.query;
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    if (id) {
      getUsuarioById(id).then(setUsuario);
    }
  }, [id]);

  if (!usuario) return <p>Loading...</p>;

  return (
    <div>
      <h1>{usuario.nome}</h1>
      <p>{usuario.email}</p>
    </div>
  );
}