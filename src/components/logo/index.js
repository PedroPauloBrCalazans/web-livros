import logoHeader from "../../imagens/logo.svg";
import "./index.css";

function Logo() {
  return (
    <div className="logo">
      <img src={logoHeader} alt="Logo" className="logo-img" />
      <p>
        <strong>Alura</strong>
        Books
      </p>
    </div>
  );
}

export default Logo;
