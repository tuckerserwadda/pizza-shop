/**
 * this component contains the increment buttons
 */


import styled from "styled-components";
import React from "react";
import { title } from "../../styles/title";
import { NavColor } from "../../styles/Colors";

export const FoodQuantityInputStyled = styled.input`
font-size:18px;
width:24px;
text-align:center;
border:none;
outline:none;
`
const IncrementContainer = styled(title)`
display:flex;
height:24px;
`
const IncrementButton = styled.div`
width:23px;
color:${NavColor};
font-size:20px;
text-align:center;
cursor:pointer;
padding:-12px;
line-height:23px;
margin: 0px 10px;
border:1px solid ${NavColor};
${({disabled}) =>disabled &&
`opacity: 0.5;
pointer-events:none; 
`
}
&:hover{
    background-color:#ffe3e3;
}

`
export const FoodQuantityInput = ({quantity})=>{
    return(
        <IncrementContainer>
            <div>Quantity:</div>
            <IncrementButton 
            // disabled if quantity is 1
            disabled= {quantity.value === 1}
            // onclick decrease quantity by one
            onClick={()=>{
               quantity.setValue(quantity.value - 1) 
            }}
            >
            -</IncrementButton>
            <FoodQuantityInputStyled {...quantity}/>
            <IncrementButton
            onClick={()=>{
                // onclick increase quantity by one 
                quantity.setValue(quantity.value + 1) 
             }}
            >+</IncrementButton>
        </IncrementContainer>
)
}