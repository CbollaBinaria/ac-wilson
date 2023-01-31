import React from 'react';
import { SliderContainer, SliderUl, SliderLi, SliderImg } from './styled';
import {imgs} from '../../utils/imgs'

function Slider() {
  return (
    <SliderContainer>
      <SliderUl>
        <SliderLi><SliderImg src={imgs[0].src}/></SliderLi>
        <SliderLi><SliderImg src={imgs[1].src}/></SliderLi>
        <SliderLi><SliderImg src={imgs[2].src}/></SliderLi>
        <SliderLi><SliderImg src={imgs[0].src}/></SliderLi>
      </SliderUl>
    </SliderContainer>
  );
}

export default Slider;