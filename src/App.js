import "./App.css";
import logoHeader from "./imagens/logo.svg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <img src={logoHeader} alt="Logo" />
          <p>
            <strong>Alura</strong>
            Books
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
