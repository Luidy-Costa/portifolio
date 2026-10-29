import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sobre | Meu Portfólio',
  description: 'Informações sobre trajetória e competências',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-8">
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto pb-6 border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wide text-indigo-400">Meu Portfólio</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-indigo-400 font-medium">Início</Link>
          <Link href="/sobre" className="text-indigo-400 font-medium">Sobre</Link>
          <Link href="/projetos" className="hover:text-indigo-400 font-medium">Projetos</Link>
        </nav>
      </header>

      <main className="max-w-4xl w-full mx-auto my-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">Sobre Mim</h2>
        <p className="text-slate-300 leading-relaxed mb-6">
          Sou estudante do curso de Tecnologia em Análise e Desenvolvimento de Sistemas no IFCE.
          Atualmente estou aprofundando conhecimentos em desenvolvimento web moderno com Next.js, React e Tailwind CSS.
        </p>

        <h3 className="text-xl font-semibold mb-3 text-white">Competências Técnicas</h3>
        <ul className="list-disc list-inside space-y-2 text-slate-300">
          <li>TypeScript / JavaScript</li>
          <li>Next.js (App Router)</li>
          <li>Tailwind CSS</li>
          <li>Git & GitHub</li>
        </ul>
      </main>

      <footer className="text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} - Todos os direitos reservados.
      </footer>
    </div>
  );
}