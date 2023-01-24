import React from 'react';
import { NavBarContainer, NavBarItem, NavBarList, NavImg } from './styled';

function NavBar() {
  return (
    <NavBarContainer>
      <NavImg src='./logos/SRlogo.png' />
      <NavBarList>
        <NavBarItem as="a" href="#Precios">Precios</NavBarItem>
        <NavBarItem as="a" href="#Contacto">Contacto</NavBarItem>
      </NavBarList>
    </NavBarContainer>
  );
}

export default NavBar;