import React from 'react'
import styled from 'styled-components'
import { foodData } from '../../Data/FoodData'
import { FoodGrid } from './FoodGrid'
import { FoodImage } from './FoodImage'
import { FoodLabel } from './FoodLabel'
const MenuStyled = styled.div`
height:1000px;
`
function Menu() {
  return (

    <MenuStyled>
        <h1>Menu</h1>
        <FoodGrid>
        {foodData.map(food =>(
            <FoodImage img={food.img}>
                <FoodLabel>{food.name}</FoodLabel>
                </FoodImage>
        ))}
           
        </FoodGrid>
       
    </MenuStyled>
  )
}

export default Menu