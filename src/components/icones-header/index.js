import "./index.css";

import perfil from "../../imagens/perfil.svg";
import sacola from "../..//imagens/sacola.svg";

function IconesHeader() {
  const icones = [perfil, sacola];

  return (
    <ul className="icones">
      {icones.map((icone) => (
        <li className="icone">
          <img src={icone} alt="Icones" />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
