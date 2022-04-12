import React from "react";
import styled from "styled-components";
import { OrderContent } from "./OrderContent";
import { OrderFooter } from "./OrderFooter";
import { ConfirmButton } from "../FoodDialogue/ConfirmButton";

const OrderStyled = styled.div`
position:fixed;
right:0px;
top:50px;
width:340px;
background-color:#ebd3ed;
height:calc(100% - 48px);
z-index:10;
box-shadow:4px 0px 5px 4px grey;
display:flex;
flex-direction:column;

`
export function Order(){
    return (
        <OrderStyled>
            <OrderContent>My Order</OrderContent>
            <OrderFooter>
                <ConfirmButton>Check Out</ConfirmButton>
            </OrderFooter>

        </OrderStyled>

    )
   
}