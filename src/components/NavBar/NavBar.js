import React from 'react'
import { NavColor } from '../../styles/Colors'
import { title } from '../../styles/title'
import styled from 'styled-components'

const NavBarStyled = styled.div`
font-family: 'Montserrat', sans-serif;
background-color:${NavColor};
padding: 10px;
position:fixed;
width:100%;
z-index:999;

`
const Logo = styled(title)`
font-size: 1.5em;
font-weight:bold;
color: white;
text-shadow:-3px 2px 0px #42222f;
`

function NavBar() {
  return (
    <NavBarStyled>
        <Logo>
            TDanz Pizza Shop
        </Logo>
        
        </NavBarStyled>
  )
}

export default NavBar