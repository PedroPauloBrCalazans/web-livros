import perfil from "../../imagens/perfil.svg";
import sacola from "../..//imagens/sacola.svg";
import styled from "styled-components";

const Icones = styled.ul`
  display: flex;
  align-items: center;
`;

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`;

function IconesHeader() {
  const icones = [perfil, sacola];

  return (
    <Icones>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="Icones" />
        </Icone>
      ))}
    </Icones>
  );
}

export default IconesHeader;
