import React from "react";
import { Dialogue } from "./Dialogue";
import { DialogueShadow } from "./DialogueShadow";
import { DialogueBanner } from "./DialogueBanner";
import { DialogueName } from "./DialogueName";
import { DialogueContent } from "./DialogueContent";
import { DialogueFooter } from "./DialogueFooter";
import { ConfirmButton } from "./ConfirmButton";
import { FormatPrice } from "../../Data/FormatPrice";
import { FoodQuantityInput } from "./FoodQuantityInput";
import { useFoodQuantity } from "../../Hooks/useFoodQuantity";
/**
 * this component displays the food that is selected 
 * it shows a background color shadow when the food item is clicked.
 * its exported to the app.js 
 * @returns displays the food selected
 */

  // get price
  export const getPrice = (order)=>{
    return order.quantity * order.price

  }
function FoodDialogueContainer({openFood, setOpenFood, setOrders, orders}) {

  // quantity hook initializer
  const quantity = useFoodQuantity(openFood && openFood.quantity)
    // when you click the shadow, the dialogue closes to let you add another food. 
    function closeFoodDialogue(){
        setOpenFood();
    }
   
    // order
    const order = {
   ...openFood,
   quantity:quantity.value // add quantity as an attribute of the order 

    }

    // add to orderFunction
    // the spread of the existing orders plus the new order .
    function addToOrder(){
      setOrders([...orders, order])
      closeFoodDialogue()

    }
    

  return(
    <>
    <DialogueShadow
    onClick={closeFoodDialogue}
    />
    <Dialogue>
        <DialogueBanner img={openFood.img}>
            <DialogueName>
              <div>{openFood.name}</div>
            </DialogueName>
        </DialogueBanner>
        <DialogueContent>
          <FoodQuantityInput quantity= {quantity}/>
        </DialogueContent>
        <DialogueFooter>
          <ConfirmButton onClick={addToOrder}>
            Add To Order:{FormatPrice(getPrice(order))}
            </ConfirmButton>
        </DialogueFooter>
    </Dialogue>
    </>
  );
  
}
// if  food is clicked. return the FoodDialogueContainer else return null 

export const FoodDialogue = (props)=>{
  if(!props.openFood)return null;
  return <FoodDialogueContainer {...props} />

}

