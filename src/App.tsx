import "./index.css";
import { Formulario } from "./components/formulario";

function App() {
  return (
    <body className="flex justify-center items-center mt-[5rem]">
      <main className="flex border-2 border-gray-400 w-[40rem]  justify-center items-center m-auto p-6">
        <Formulario />
      </main>
    </body>
  );
}

export default App;
