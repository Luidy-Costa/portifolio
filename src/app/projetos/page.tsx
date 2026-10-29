import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projetos | Meu Portfólio',
  description: 'Projetos desenvolvidos',
};

export default function ProjetosPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-between p-8">
      <header className="flex justify-between items-center max-w-4xl w-full mx-auto pb-6 border-b border-slate-700">
        <h1 className="text-xl font-bold tracking-wide text-indigo-400">Meu Portfólio</h1>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-indigo-400 font-medium">Início</Link>
          <Link href="/sobre" className="hover:text-indigo-400 font-medium">Sobre</Link>
          <Link href="/projetos" className="text-indigo-400 font-medium">Projetos</Link>
        </nav>
      </header>

      <main className="max-w-4xl w-full mx-auto my-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-indigo-400">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Portfólio Pessoal</h3>
            <p className="text-slate-400 text-sm mb-4">
              Desenvolvido com Next.js e Tailwind CSS para a disciplina de PWII.
            </p>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded">Next.js</span>
          </div>

          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Helana</h3>
            <p className="text-slate-400 text-sm mb-4">
              Sistema web de auxilio ao diagnostico de cancer de pulmão utilizando inteligencia artificial especializada 
            </p>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded mx-1">Python</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded mx-1">Flask</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded mx-1">portgress</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded mx-1">TypeScript</span>
          </div>


          <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
            <h3 className="text-xl font-semibold mb-2">Sistram</h3>
            <p className="text-slate-400 text-sm mb-4">
              Sistema web de auxílio médico à marcação e encaminhamento de pacientes para exames, consultas e derivados.
            </p>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">Next.js</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">TypeScript</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">Tailwind CSS</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">PostgreSQL</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">Prisma</span>
            <span className="inline-block bg-indigo-900/50 text-indigo-300 text-xs px-3 py-1 rounded m-1">PWA</span>
          </div>
        </div>
      </main>

      <footer className="text-center text-slate-500 text-sm border-t border-slate-800 pt-6">
        © {new Date().getFullYear()} - Todos os direitos reservados.
      </footer>
    </div>
  );
}