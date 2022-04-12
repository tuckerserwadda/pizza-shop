import React from "react";
import { Dialogue } from "./Dialogue";
import { DialogueShadow } from "./DialogueShadow";
import { DialogueBanner } from "./DialogueBanner";
import { DialogueName } from "./DialogueName";
import { DialogueContent } from "./DialogueContent";
import { DialogueFooter } from "./DialogueFooter";
import { ConfirmButton } from "./ConfirmButton";
/**
 * this component displays the food that is selected 
 * it shows a background color shadow when the food item is clicked.
 * its exported to the app.js 
 * @returns displays the food selected
 */

export function FoodDialogue({addFood, setAddFood}) {
    // when you click the shadow, the dialogue closes to let you add another food. 
    function closeFoodDialogue(){
        setAddFood();
    }
    if(!addFood)return null;

  return addFood ? (
    <>
    <DialogueShadow
    onClick={closeFoodDialogue}
    />
    <Dialogue>
        <DialogueBanner img={addFood.img}>
            <DialogueName>{addFood.name}</DialogueName>
        </DialogueBanner>
        <DialogueContent></DialogueContent>
        <DialogueFooter>
          <ConfirmButton>Add To Order</ConfirmButton>
        </DialogueFooter>
    </Dialogue>
    </>
  ): null;
  
}

