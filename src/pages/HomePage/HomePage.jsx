import { useState, useEffect } from 'react';
import { HeroSection } from '../../components/HeroSection/HeroSection.jsx';
import { ProjectsSection } from '../../components/ProjectsSection/ProjectsSection';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';

import { Container, LinkWrapper } from './HomePage.styled';
import { LinkToTop } from '../../components/LinkToTop/LinkToTop.jsx';

export const HomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrolled = window.scrollY > 450;
    setIsScrolled(scrolled);
    console.log('scroll', scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <LinkWrapper className={isScrolled ? '' : 'visually-hidden'}>
        <LinkToTop />
      </LinkWrapper>
      <HeroSection id="hero" />
      <ProjectsSection id="work" />
      <AboutSection id="about" />
      <ContactSection id="contact" />
    </Container>
  );
};
