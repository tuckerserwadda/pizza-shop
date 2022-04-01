import { createGlobalStyle } from 'styled-components'
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
 // global style 
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #bd97c4;
    font-family: 'Roboto', sans-serif;
    margin:0%;
  }
  h1,h2,h3{
    font-family: 'Montserrat', sans-serif;
  }
`
function App() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <Menu/>
    <GlobalStyle/>

    </>

  );
}

export default App;
