import React from 'react'
import styled from 'styled-components'
import { foodCategory } from '../../Data/FoodByCategory'
import { FoodGrid } from './FoodGrid'
import { FoodImage } from './FoodImage'
import { FoodLabel } from './FoodLabel'
const MenuStyled = styled.div`
height:1000px;
width: 60%;
`
//  object.entries returns an array objects with key value pair
//  then map the category as the key and foodData as value .
//  then map the foodData to be displayed 
function Menu({setAddFood}) {
  return (
    <MenuStyled>
   
        {Object.entries(foodCategory).map(([category, foodData])=>(
            <>
        <h1>{category}</h1>
        <FoodGrid>
            {foodData.map(food =>(
                <FoodImage
                 img={food.img}
                 onClick={() =>{setAddFood(food)}}
                 >
                <FoodLabel>{food.name}</FoodLabel>
                </FoodImage>
        ))}       
        </FoodGrid>
            
            </>
        ))}

       
    </MenuStyled>
  )
}

export default Menu