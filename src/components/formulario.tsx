import { useState, useCallback } from "react";
import type { Favorito } from "../types/favorito";

type Props = {
  aoAdicionar: (favorito: Favorito) => void;
  favoritos: Favorito[];
};

export function Formulario({ aoAdicionar, favoritos }: Props) {
  const [titulo, setTitulo] = useState("");
  const [url, setUrl] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!titulo || !url) return setErro("Preencha todos os campos");
      if (favoritos.some((f) => f.url === url)) return setErro("Link já salvo");

      setErro("");
      aoAdicionar({ id: crypto.randomUUID(), titulo, url });
      setTitulo("");
      setUrl("");
    },
    [titulo, url, favoritos, aoAdicionar],
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="group/field relative">
        <input
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Nome do Bookmark"
          className="w-full bg-slate-950/40 border border-slate-800 rounded-2xl py-4 px-5 text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all"
        />
      </div>

      <div className="group/field relative">
        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="URL (https://...)"
          className="w-full bg-slate-950/40 border border-slate-800 rounded-2xl py-4 px-5 text-indigo-400 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all text-sm font-mono"
        />
      </div>

      {erro && (
        <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest ml-2">
          {erro}
        </p>
      )}

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(79,70,229,0.4)] active:scale-[0.98] transition-all mt-2"
      >
        Adicionar Bookmark
      </button>
    </form>
  );
}
