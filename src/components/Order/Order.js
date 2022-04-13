import React from "react";
import styled from "styled-components";
import { OrderContent } from "./OrderContent";
import { OrderFooter } from "./OrderFooter";
import { ConfirmButton } from "../FoodDialogue/ConfirmButton";
import { OrderContainer } from "./OrderContainer";
import { OrderItem } from "./OrderItem";
import { FormatPrice } from "../../Data/FormatPrice";
import { getPrice } from "../FoodDialogue/FoodDialogue";

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
// recives the orders as a prop
export function Order({orders}){
    
    return (
        <OrderStyled>

           {orders.length === 0 ? (<OrderContent>No orders added</OrderContent>) : (
               <OrderContent> 
                   <OrderContainer>Your Order:</OrderContainer>
                   {orders.map(order =>(
                    <OrderContainer>
                        <OrderItem>
                            <div>{order.quantity}</div>
                            <div>{order.name}</div>
                            <div>{FormatPrice(getPrice(order))}</div>
                            </OrderItem> 
                    </OrderContainer>
                       
                   ))}
               </OrderContent>
           )} 
            <OrderFooter>
                <ConfirmButton>Check Out</ConfirmButton>
            </OrderFooter>

        </OrderStyled>

    )
   
}