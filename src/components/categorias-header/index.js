import "./index.css";

function CategoriasHeader() {
  const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

  return (
    <ul className="categorias-header">
      {textoOpcoes.map((texto) => (
        <li className="opcoes">
          <p>{texto}</p>
        </li>
      ))}
    </ul>
  );
}

export default CategoriasHeader;
