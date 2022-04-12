import React from "react";
import { Dialogue } from "./Dialogue";
import { DialogueShadow } from "./DialogueShadow";
import { DialogueBanner } from "./DialogueBanner";
import { DialogueName } from "./DialogueName";
import { DialogueContent } from "./DialogueContent";
import { DialogueFooter } from "./DialogueFooter";
import { ConfirmButton } from "./ConfirmButton";
import { FormatPrice } from "../../Data/FormatPrice";
/**
 * this component displays the food that is selected 
 * it shows a background color shadow when the food item is clicked.
 * its exported to the app.js 
 * @returns displays the food selected
 */

export function FoodDialogue({openFood, setOpenFood, setOrders, orders}) {
    // when you click the shadow, the dialogue closes to let you add another food. 
    function closeFoodDialogue(){
        setOpenFood();
    }
    if(!openFood)return null;
    // order
    const order = {
   ...openFood
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
        <DialogueContent></DialogueContent>
        <DialogueFooter>
          <ConfirmButton onClick={addToOrder}>
            Add To Order:{FormatPrice(openFood.price)}
            </ConfirmButton>
        </DialogueFooter>
    </Dialogue>
    </>
  );
  
}

