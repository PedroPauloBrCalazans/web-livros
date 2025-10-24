import { Link } from "react-router-dom";
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
      <Link to="/">
        <Logo />
      </Link>
      <CategoriasHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
