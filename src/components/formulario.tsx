import { useState, useCallback } from "react";
import type { Favorito } from "../types/favorito";

type Props = {
  aoAdicionar: (favorito: Favorito) => void;
  favoritos: Favorito[];
};

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export function Formulario({ aoAdicionar, favoritos }: Props) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (!titulo || !url) {
        setErro("Por favor, preencha todos os campos");
        return;
      }

      if (!isValidUrl(url)) {
        setErro("Por favor, insira uma URL válida");
        return;
      }

      const urlJaExiste = favoritos.some((f) => f.url === url);
      if (urlJaExiste) {
        setErro("Essa URL já foi adicionada");
        return;
      }

      setErro("");

      const novoFavorito: Favorito = {
        id: crypto.randomUUID(),
        titulo,
        url,
      };

      aoAdicionar(novoFavorito);

      setTitulo("");
      setUrl("");
    },
    [titulo, url, favoritos, aoAdicionar]
  );

  const isFormValid = titulo.trim() !== "" && url.trim() !== "" && isValidUrl(url);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center gap-5">
      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite seu título"
        className="w-[90%] h-10 border border-gray-500 rounded-[10px] p-2"
        aria-label="Título do bookmark"
      />

      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Digite sua URL"
        className="w-[90%] h-10 border border-gray-500 rounded-[10px] p-2"
        aria-label="URL do bookmark"
      />

      {erro && (
        <p className="text-red-600 font-bold" role="alert" aria-live="assertive">
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={!isFormValid}
        className={` text-lg w-[70%] max-w-xs h-10 border-2 bg-blue-500 text-white border-blue-700 rounded-4xl transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-blue-700` }
      >
        Adicionar bookmark
      </button>
    </form>
  );
}