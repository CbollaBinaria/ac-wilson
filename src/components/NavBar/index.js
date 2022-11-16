import React from 'react';
import { NavBarContainer, NavBarItem, NavBarList, NavTitle } from './styled';


function NavBar() {
  return (
    <NavBarContainer>
      <NavTitle> A/C Wilson </NavTitle>
      <NavBarList>
        <NavBarItem as="a" href="#Nosotros">Nosotros</NavBarItem>
        <NavBarItem as="a" href="#Precios">Precios</NavBarItem>
        <NavBarItem as="a" href="#Contacto">Contacto</NavBarItem>
      </NavBarList>
    </NavBarContainer>
  );
}

export default NavBar;