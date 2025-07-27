import { useState } from "react";
import type { Favorito } from "../types/favorito";

type Props = {
  aoAdicionar: (favorito: Favorito) => void;
  favoritos: Favorito[]
};

export function Formulario({ aoAdicionar, favoritos }: Props) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !url) {
      return;
    }

    const urlJaExiste = favoritos.some( f => f.url === url)

    if(urlJaExiste){
      setErro("Essa URL já foi adicionada")
      return
    }

    setErro("")

    const novoFavorito: Favorito = {
      id: crypto.randomUUID(),
      titulo,
      url,
    };

    aoAdicionar(novoFavorito);

    setTitulo("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <h1 className="text-3xl">Gerenciador de bookmarks</h1>

      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite seu título"
        className="w-[25rem] h-10 border-1 border-gray-500 rounded-[10px] p-2"
      />

      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Digite sua URL"
        className="w-[25rem] h-10 border-1 border-gray-500 rounded-[10px] p-2"
      />

{erro && (
  <p className="text-red-600 font-bold">{erro}</p>
)}

      <button
        type="submit"
        className="text-[18px] w-[15rem] h-10 border-2 bg-blue-500 text-white border-blue-700 rounded-4xl hover:scale-105 hover:shadow-lg
  transition-all duration-300 ease-in-out hover:bg-blue-700"
      >
        Adicionar bookmark
      </button>
    
    </form>
  );
}
