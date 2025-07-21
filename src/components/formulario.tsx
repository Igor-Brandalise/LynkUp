import { useState } from "react";
import type { Favorito } from "../types/favorito";

type Props = {
  aoAdicionar: (favorito: Favorito) => void;
};

export function Formulario({ aoAdicionar }: Props) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo || !url) {
      return;
    }

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
        className="w-[25rem] h-10 border-1 border-gray-300 rounded-[10px] p-2"
      />

      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Digite sua URL"
        className="w-[25rem] h-10 border-1 border-gray-300 rounded-[10px] p-2"
      />

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
