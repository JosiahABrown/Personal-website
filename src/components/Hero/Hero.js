import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hey, <br />
        I'm Josiah Brown
      </SectionTitle>
      <SectionText>
        I am a creator with skills in blockchain technology, web development, customer success, business operations, and photography. 
      </SectionText>
      <Button onClick={() => window.location = 'mailto:josiah.alen.brown@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;