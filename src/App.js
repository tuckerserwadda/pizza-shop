import { GlobalStyle } from './styles/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { FoodDialogue } from './components/FoodDialogue/FoodDialogue';
import { useState } from 'react';
function App() {
  const [addFood, setAddFood] = useState();
  return (
   
    <>
     <GlobalStyle/>
     <FoodDialogue addFood={addFood} setAddFood={setAddFood}/>
    <NavBar/>
    <Banner/>
    <Menu setAddFood={setAddFood}/>
    

    </>

  );
}

export default App;
