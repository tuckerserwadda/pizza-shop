/**
 * this hook gets the value of the quantity entered 
 */
import { useState } from "react";

export const useFoodQuantity = (defaultQuantity) =>{
    const [value, setValue] = useState(defaultQuantity || 1 )
    // onchange attribute
function onChange (e){
        // convert the text input to number (+) and see if its greater than one 
        if(!(+e.target.value >= 1)){
            setValue(1)
            return
        }
        setValue(+e.target.value)
    }
    return{
        value,
        setValue,
        onChange
    }
}