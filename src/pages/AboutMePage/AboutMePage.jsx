import { useState, useEffect } from 'react';
import { LinkToTop } from '../../components/LinkToTop/LinkToTop.jsx';
import { HeroAboutSection } from '../../components/HeroAboutSection/HeroAboutSection.jsx';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';

import { Container, LinkWrapper } from './AboutMePage.styled';

export const AboutMePage = () => {
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

      <HeroAboutSection/>
      <AboutSection/>
      <ContactSection/>
    </Container>
  );
};
