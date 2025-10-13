import CategoriasHeader from "../categorias-header";
import IconesHeader from "../icones-header";
import Logo from "../logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <CategoriasHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
