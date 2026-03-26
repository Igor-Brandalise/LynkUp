import { useState, useEffect, useCallback } from "react";
import { Formulario } from "./components/formulario";
import { Favoritos } from "./components/favoritos";
import type { Favorito } from "./types/favorito";

function App() {
  const [favoritos, setFavoritos] = useState<Favorito[]>(() => {
    const salvos = localStorage.getItem("favoritos");
    return salvos ? JSON.parse(salvos) : [];
  });

  const adicionarFavorito = useCallback((novo: Favorito) => {
    setFavoritos((prev) => [...prev, novo]);
  }, []);

  const removerFavorito = useCallback((id: string) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  }, [favoritos]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 flex items-center justify-center p-6 selection:bg-indigo-500/30">
      {/* Background Glows Decorativos */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="w-full max-w-[500px] relative">
        <section className="relative bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.8)] overflow-hidden">
          <header className="mb-10 text-center">
            <div className="inline-block bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 mb-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400">
                Cloud Storage v2
              </span>
            </div>
            <h1 className="text-4xl font-black text-white tracking-tighter mb-2">
              My <span className="text-indigo-500">Links</span>
            </h1>
            <p className="text-slate-500 text-sm font-medium">
              Sua curadoria digital organizada
            </p>
          </header>

          <div className="space-y-10">
            <Formulario aoAdicionar={adicionarFavorito} favoritos={favoritos} />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-800"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 pb-4 text-slate-600 tracking-[0.3em] font-bold">
                  Coleção
                </span>
              </div>
            </div>

            <Favoritos lista={favoritos} aoRemover={removerFavorito} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
