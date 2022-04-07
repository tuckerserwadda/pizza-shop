import styled from "styled-components";

// banner is imported in the dialogue 
export const DialogueBanner = styled.div`
min-height:200px;
margin-bottom:200px;
${({img})=>`background-image:url(${img});`}
background-position:center;
background-size:cover;

`