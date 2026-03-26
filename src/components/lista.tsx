import type { Favorito } from "../types/favorito";

type Props = { itens: Favorito[]; aoRemover: (id: string) => void };

export function Lista({ itens, aoRemover }: Props) {
  if (itens.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed border-slate-800/50 rounded-[2rem]">
        <p className="text-slate-600 text-xs font-bold uppercase tracking-widest">
          Vazio por enquanto
        </p>
      </div>
    );
  }

  return (
    <ul className="grid gap-4 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
      {itens.map((item) => (
        <li
          key={item.id}
          className="group flex justify-between items-center bg-white/5 border border-white/5 p-5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all animate-in fade-in slide-in-from-bottom-3"
        >
          <div className="flex flex-col min-w-0">
            <span className="text-white font-bold truncate text-base tracking-tight">
              {item.titulo}
            </span>
            <a
              href={item.url}
              target="_blank"
              className="text-indigo-400/70 text-xs truncate hover:text-indigo-400 transition-colors mt-1 font-mono"
            >
              {item.url.replace(/^https?:\/\//, "")}
            </a>
          </div>

          <button
            onClick={() => aoRemover(item.id)}
            className="opacity-0 group-hover:opacity-100 bg-red-500/10 text-red-500 text-[10px] font-black uppercase tracking-tighter rounded-lg px-3 py-2 hover:bg-red-500 hover:text-white transition-all ml-4"
          >
            Del
          </button>
        </li>
      ))}
    </ul>
  );
}
