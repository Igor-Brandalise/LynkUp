import "./index.css";
import { Formulario } from "./components/formulario";
import { Favoritos } from "./components/favoritos";
import type { Favorito } from "./types/favorito";
import { useState, useEffect, useCallback } from "react";

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
    <div className="flex justify-center items-start pt-10 bg-zinc-300 min-h-screen px-4">
      <main className="flex flex-col gap-8 border-2 border-gray-400 w-full max-w-xl rounded-2xl p-6 md:p-8 shadow-lg bg-stone-300">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Gerenciador de Bookmarks
        </h1>

        <Formulario aoAdicionar={adicionarFavorito} favoritos={favoritos} />

        <Favoritos lista={favoritos} aoRemover={removerFavorito} />
      </main>
    </div>
  );
}

export default App;
