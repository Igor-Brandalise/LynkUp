export function Formulario() {
  return (
    <section className="flex flex-col items-center gap-5">
      <h1 className="text-3xl">Gerenciador de bookmarks</h1>
      <input
        type="text"
        placeholder="Digite seu título"
        className="w-[25rem] h-10 border-1 border-gray-300 rounded-[10px] p-2"
      />
      <input
        type="url"
        name=""
        id=""
        placeholder="Digite sua URL"
        className="w-[25rem] h-10 border-1 border-gray-300 rounded-[10px] p-2"
      />
      <button className="text-[18px] w-[15rem] h-10 border-2 bg-blue-500 text-white border-blue-700 rounded-4xl hover:scale-105 hover:shadow-lg
  transition-all duration-300 ease-in-out hover:bg-blue-700">
        Adicionar bookmark
      </button>
    </section>
  );
}

<h1>Gerenciador de bookmarks</h1>;
