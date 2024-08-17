import { HeroSection } from '../../components/HeroSection/HeroSection.jsx';
import { ProjectsSection } from '../../components/ProjectsSection/ProjectsSection';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';

import { Container } from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <HeroSection id='hero'/>
      <ProjectsSection id='work'/>
      <AboutSection id='about'/>
      <ContactSection id='contact'/>
    </Container>
  );
};
