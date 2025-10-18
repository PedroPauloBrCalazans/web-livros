import Header from "./components/header";
import styled from "styled-components";
import Pesquisa from "./components/Pesquisar";
import UltimosLancamentos from "./components/ultimos-lancamentos";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
`;

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
