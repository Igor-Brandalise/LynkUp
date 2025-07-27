import type { Favorito } from "../types/favorito";

type props = {
  itens: Favorito[];
  aoRemover: (id: string) => void;
};

export function Lista({ itens, aoRemover }: props) {
  return (
    <ul className="flex flex-col gap-4 mt-6">
      {itens.map((item) => (
        <li key={item.id} className="flex justify-between items-center rounded-[10px] border p-2">
          <a
            href={item.url}
            target="_blank"
            rel="nooperner noreferrer"
            className="text-blue-500 hover:underline"
          >
            {item.titulo}
          </a>
          <button onClick={() => aoRemover(item.id)} className="bg-red-900 text-white rounded-2xl px-3 py-1 hover:bg-red-600">
            Remover
          </button>
        </li>
      ))}
    </ul>
  );
}
