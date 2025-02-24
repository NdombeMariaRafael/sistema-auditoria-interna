import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside>
      <Link href="/auditorias">Auditorias</Link>
      <Link href="/usuarios">Usuários</Link>
      <Link href="/relatorios">Relatórios</Link>
      <Link href="/configuracoes">Configurações</Link>
    </aside>
  );
}