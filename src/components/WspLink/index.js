import React from 'react';
import { WspContainer, WspImg } from './styled';

function WspLink() {
  return (
    <WspContainer>
      <a href={`https://wa.me/+5491122530730?text=Hola,%20cómo están?%20Quería%20pedir%20un%20presupuesto%20para`} target='blank' ><WspImg src='./logos/wsp.png'/></a>
    </WspContainer>
  );
}

export default WspLink;