import { GlobalStyle } from './styles/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { FoodDialogue } from './components/FoodDialogue/FoodDialogue';
import { Order } from './components/Order/Order';
import { useState } from 'react';
function App() {
  const [addFood, setAddFood] = useState();
  return (
   
    <>
     <GlobalStyle/>
     <FoodDialogue addFood={addFood} setAddFood={setAddFood}/>
    <NavBar/>
    <Order/>
    <Banner/>
    <Menu setAddFood={setAddFood}/>
    

    </>

  );
}

export default App;
