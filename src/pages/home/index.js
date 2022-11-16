import React from 'react';
import { Container } from '../../components/container';
import MainTitle from '../../components/MainTitle';
import { Section } from '../../components/Section';
import { SectionTitle } from '../../components/SectionTitle';
import { Paragraph } from '../../components/Paragraph';
import Slider from '../../components/Slider';

function Home() {
  return (
    <Container>
      <MainTitle/>
      <Section>
        <SectionTitle>Nosotros</SectionTitle>
        <Paragraph>
          Nos dedicamos a la instalación, reparación y mantenimiento de aires acondicionados, heladeras y freezers. Llevamos mas de 3 años de experiencia en el rubro y nos comprometemos con dar el mejor servicio a un precio competitivo dentro del mercado. Contamos con matrícula vigente
        </Paragraph>
        <Slider/>
      </Section>
      <Section>
      <SectionTitle>Precios</SectionTitle>
      </Section>
      <Section>
      <SectionTitle>Contacto</SectionTitle>
      </Section>
    </Container>
  );
}

export default Home;