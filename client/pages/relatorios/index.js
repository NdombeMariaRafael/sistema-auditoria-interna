import { useEffect, useState } from 'react';
import { gerarRelatorio } from '../../utils/api';

export default function Relatorios() {
  const [relatorio, setRelatorio] = useState(null);

  useEffect(() => {
    gerarRelatorio().then(setRelatorio);
  }, []);

  if (!relatorio) return <p>Loading...</p>;

  return (
    <div>
      <h1>Relatórios</h1>
      <pre>{JSON.stringify(relatorio, null, 2)}</pre>
    </div>
  );
}