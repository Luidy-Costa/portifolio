import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col justify-center items-center p-8 text-center">
      <h1 className="text-6xl font-black text-indigo-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Página Não Encontrada</h2>
      <p className="text-slate-400 mb-8 max-w-md">
        A página que você está tentando acessar não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition"
      >
        Voltar à Página Inicial
      </Link>
    </div>
  );
}