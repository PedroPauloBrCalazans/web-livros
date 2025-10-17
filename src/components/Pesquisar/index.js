import styled from "styled-components";
import Input from "../Input";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

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
  const [livrosPesquisa, setLivrosPesquisa] = useState([]);

  return (
    <ContainerPesquisar>
      <Titulo>Por onde começar?</Titulo>
      <SubTitulo>Encontre o seu livro na nossa estante.</SubTitulo>
      <Input
        type="text"
        placeholder="Pesquisar"
        onBlur={(e) => {
          const textoDigitado = e.target.value;
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          );
          setLivrosPesquisa(resultadoPesquisa);
        }}
      />
      <p>{livrosPesquisa}</p>
    </ContainerPesquisar>
  );
}

export default Pesquisa;
