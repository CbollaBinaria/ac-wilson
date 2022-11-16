import React from 'react';
import { SliderContainer, SliderUl, SliderLi, SliderImg } from './styled';
function Slider() {
  return (
    <SliderContainer>
      <SliderUl>
        <SliderLi><SliderImg src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2016/12/01165904/Aire-acondicionado-temperatura-1920.jpg"/></SliderLi>
        <SliderLi><SliderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOTYLydQuSNjIvP8XV5cEtf0UPxV9cKSEEtXe3tHp2eGuwoF9nnVzEOLVMkyivE_SP4I&usqp=CAU"/></SliderLi>
        <SliderLi><SliderImg src="https://noticias.bidcom.com.ar/wp-content/uploads/2022/01/mejor-aire-acondicionado-2022.jpg"/></SliderLi>
        <SliderLi><SliderImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpOTYLydQuSNjIvP8XV5cEtf0UPxV9cKSEEtXe3tHp2eGuwoF9nnVzEOLVMkyivE_SP4I&usqp=CAU"/></SliderLi>
      </SliderUl>
    </SliderContainer>
  );
}

export default Slider;