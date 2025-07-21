import "./index.css";
import { Formulario } from "./components/formulario";
import { Favoritos } from "./components/favoritos";
import type { Favorito } from "./types/favorito";
import { useState } from "react";

function App() {

    const [favoritos, setFavoritos] = useState<Favorito[]>([]);

  const adicionarFavorito = (novo: Favorito) => {
    setFavoritos((prev) => [...prev, novo]);
  };

  const removerFavorito = (id: string) => {
    setFavoritos((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <div className="flex justify-center items-center mt-[5rem]">
      <main className="flex border-2 border-gray-400 w-[40rem] rounded-2xl justify-center items-center m-auto p-6">

        <Formulario aoAdicionar={adicionarFavorito}/>
        <Favoritos lista={favoritos} aoRemover={removerFavorito} />
      </main>
    </div>
  );
}

export default App;
