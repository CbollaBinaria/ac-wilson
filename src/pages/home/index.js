import React from 'react';
import { Container, WhiteContainer } from '../../components/container';
import MainTitle from '../../components/MainTitle';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Paragraph } from '../../components/Paragraph';
import Slider from '../../components/Slider';


function Home() {
  return (
    <Container>
      <MainTitle />
      <Section id='Nosotros'>
        <SectionTitle>Nosotros</SectionTitle>
        <WhiteContainer>
        <Paragraph>
          Nos dedicamos a la instalación, reparación y mantenimiento de aires acondicionados, heladeras y freezers. Llevamos mas de 3 años de experiencia en el rubro y nos comprometemos con dar el mejor servicio a un precio competitivo dentro del mercado. Contamos con matrícula vigente
        </Paragraph>
        </WhiteContainer>
        <Slider />
      </Section>
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