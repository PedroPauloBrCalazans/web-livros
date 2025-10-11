import "./index.css";

import CategoriasHeader from "../categorias-header";
import IconesHeader from "../icones-header";
import Logo from "../logo";

function Header() {
  return (
    <header className="App-header">
      <Logo />
      <CategoriasHeader />
      <IconesHeader />
    </header>
  );
}

export default Header;
