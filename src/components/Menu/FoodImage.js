import styled from "styled-components";
import { title } from "../../styles/title";
// pass the image as a prop from the react component
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
box-shadow:0px 0px 10px 0px grey;
&:hover{
    cursor:pointer;
    opacity:0.7;

}

`