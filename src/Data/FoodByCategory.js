import { foodData } from "./FoodData";
/**
 * using the reduce function put the pizzas in to categories 
 * it returns an object with category as key and an array of pizza data as value 
 *  */
export const foodCategory= foodData.reduce((result, food)=>{
if(!result[food.category]){
    result[food.category] = [];
}
result[food.category].push(food)
return result
},{})