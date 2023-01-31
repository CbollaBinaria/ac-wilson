import React from 'react';
import { Container, WhiteContainer } from '../../components/container';
import MainTitle from '../../components/MainTitle';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Paragraph } from '../../components/Paragraph';
import { txts } from '../../utils/texts';
import Slider from '../../components/Slider';
import MainLogo from '../../components/MainLogo';

function Home() {
  return (
    <Container>
      <MainLogo/>
      <MainTitle />
      <Section id='Nosotros'>
        <SectionTitle>Nosotros</SectionTitle>
        <WhiteContainer>
        <Paragraph>
          {txts.about}
        </Paragraph>
        </WhiteContainer>
        
      </Section>
        <Slider/>
      <Section id='Precios'>
        <SectionTitle>Precios</SectionTitle>
      </Section>
      <Section id='Contacto'>
        <SectionTitle>Contacto</SectionTitle>
      </Section>
    </Container>
  );
}

export default Home;