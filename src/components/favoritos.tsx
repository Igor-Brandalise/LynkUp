import type { Favorito } from "../types/favorito";
import { Lista } from "./lista";

type Props = { lista: Favorito[]; aoRemover: (id: string) => void };

export function Favoritos({ lista, aoRemover }: Props) {
  return (
    <div className="relative">
      <Lista itens={lista} aoRemover={aoRemover} />
    </div>
  );
}
