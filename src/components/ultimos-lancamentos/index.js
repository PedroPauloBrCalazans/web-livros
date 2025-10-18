import styled from "styled-components";
import { livros } from "./dadosUltimosLancamentos";
import { Titulo } from "../Titulo";

const UltimosLancamentosContainer = styled.section`
  background-color: #ebecee;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  justify-content: center;
  cursor: pointer;
  gap: 5px;
`;

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#EB9B00" tamanhoFonte="36px">
        Últimos lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <img src={livro.src} alt="Livros últimos lançamentos" />
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  );
}

export default UltimosLancamentos;
