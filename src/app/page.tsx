import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Início | Meu Portfólio',
  description: 'Página inicial do meu portfólio pessoal',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-8">
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto pb-6 border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wide text-indigo-400">Meu Portfólio</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-indigo-400 font-medium">Início</Link>
          <Link href="/sobre" className="hover:text-indigo-400 font-medium">Sobre</Link>
          <Link href="/projetos" className="hover:text-indigo-400 font-medium">Projetos</Link>
        </nav>
      </header>

      <main className="max-w-4xl w-full mx-auto my-auto py-12 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Olá! Sou Estudante de ADS </h2>
        <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto">
          Bem-vindo ao meu portfólio com Next.js e Tailwind CSS.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/projetos"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Ver Projetos
          </Link>
          <Link
            href="/sobre"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg border border-slate-600 transition"
          >
            Sobre Mim
          </Link>
        </div>
      </main>

      <footer className="text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} - Todos os direitos reservados.
      </footer>
    </div>
  );
}