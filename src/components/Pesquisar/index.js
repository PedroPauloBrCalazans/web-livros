import styled from "styled-components";
import Input from "../Input";

const ContainerPesquisar = styled.section`
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
  color: #fff;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`;

const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

function Pesquisa() {
  return (
    <ContainerPesquisar>
      <Titulo>Por onde começar?</Titulo>
      <SubTitulo>Encontre o seu livro na nossa estante.</SubTitulo>
      <Input type="text" placeholder="Pesquisar" />
    </ContainerPesquisar>
  );
}

export default Pesquisa;
