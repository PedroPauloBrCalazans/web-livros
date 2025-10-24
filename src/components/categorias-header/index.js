import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoriasHeaderUL = styled.ul`
  display: flex;
  margin-left: 15px;
`;

const Opcoes = styled.li`
  display: flex;
  font-size: 16px;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  padding: 0 5px;
  cursor: pointer;
  min-width: 120px;
`;

function CategoriasHeader() {
  const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "ESTANTE"];

  return (
    <CategoriasHeaderUL>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcoes>
            <p>{texto}</p>
          </Opcoes>
        </Link>
      ))}
    </CategoriasHeaderUL>
  );
}

export default CategoriasHeader;
