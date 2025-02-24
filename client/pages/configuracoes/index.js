import { useState } from 'react';
import { atualizarConfiguracoes } from '../../utils/api';

export default function Configuracoes() {
  const [configuracoes, setConfiguracoes] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await atualizarConfiguracoes(configuracoes);
      alert('Configurações atualizadas com sucesso!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Configurações</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Configuração 1" value={configuracoes.config1 || ''} onChange={(e) => setConfiguracoes({ ...configuracoes, config1: e.target.value })} />
        <input type="text" placeholder="Configuração 2" value={configuracoes.config2 || ''} onChange={(e) => setConfiguracoes({ ...configuracoes, config2: e.target.value })} />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}