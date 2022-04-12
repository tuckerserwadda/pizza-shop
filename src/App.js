import { GlobalStyle } from './styles/GlobalStyle';
import NavBar from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { FoodDialogue } from './components/FoodDialogue/FoodDialogue';
import { Order } from './components/Order/Order';

import { useOpenFood } from './Hooks/useOpenFood';
import { useOrders } from './Hooks/useOders';
function App() {
  const openFood = useOpenFood();
  const orders = useOrders()
  return (
   
    <>
     <GlobalStyle/>
     <FoodDialogue {...openFood} {...orders}/>
    <NavBar/>
    <Order {...orders}/>
    <Banner/>
    <Menu {...openFood}/>
    

    </>

  );
}

export default App;
