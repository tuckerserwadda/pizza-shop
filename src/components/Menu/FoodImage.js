import styled from "styled-components";
import { title } from "../../styles/title";
// pass the image as a prop from the react component
// add css transitions to animate the cards
export  const FoodImage = styled(title)`
height:200px;
padding:10px;
font-size:2em;
font-weight:bold;
background-image: ${({img}) =>`url(${img});`}
background-position:center;
background-size:cover;
filter:contrast(75%);
border-radius:7px;
margin-top:5px;
transition-property:box-shadow margin-top filter;
transition-duration:.1s;
box-shadow:0px 0px 2px 0px grey;
&:hover{
    cursor:pointer;
    margin-top:0px;
    margin-bottom:5px;
    filter:contrast(100%);
    box-shadow:0px 0px 10px 0px grey;

}

`