/**
 * this hook sets the title of the page 
 * whenever a food item is selected the title changes to name of the food 
 */

import { useEffect } from "react";
export const useTitle = ({openFood, orders}) =>{
    useEffect(()=>{
        if(openFood){
            document.title = openFood.name;
        }else{
            document.title = orders.length === 0 ? `Tdanz Pizza Shop` : `[${orders.length}]  items in your order`
        }

    })

}