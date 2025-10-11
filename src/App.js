import "./App.css";
import Logo from "./components/logo";
import perfil from "./imagens/perfil.svg";
import sacola from "./imagens/sacola.svg";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const icones = [perfil, sacola];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <ul className="categorias-header">
          {textoOpcoes.map((texto) => (
            <li className="opcoes">
              <p>{texto}</p>
            </li>
          ))}
        </ul>

        <ul className="icones">
          {icones.map((icone) => (
            <li className="icone">
              <img src={icone} alt="Icones" />
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
