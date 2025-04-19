import Header from './componentes/header'
import Pesquisa from './componentes/pesquisa'
import UltimosLancamentos from './componentes/ultimosLancamentos'
import styled from 'styled-components'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vw;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`

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
