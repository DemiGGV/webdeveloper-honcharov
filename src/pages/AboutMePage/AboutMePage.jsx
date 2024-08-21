import { useState, useEffect } from 'react';
import { LinkToTop } from '../../components/Utils/LinkToTop/LinkToTop.jsx';
import { HeroAboutSection } from '../../components/HeroAboutSection/HeroAboutSection.jsx';
import { CapabilitiesSection } from '../../components/CapabilitiesSection/CapabilitiesSection';
import { ExperienceSection } from '../../components/ExperienceSection/ExperienceSection';

import { Container, LinkWrapper } from './AboutMePage.styled';
import { EducationSection } from '../../components/EducationSection/EducationSection.jsx';
import { AutoScrollUp } from '../../components/Utils/AutoScrollUp/AutoScrollUp.jsx';

export const AboutMePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrolled = window.scrollY > 450;
    setIsScrolled(scrolled);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Container>
      <AutoScrollUp/>
      <LinkWrapper $isScrolled={isScrolled}>
        <LinkToTop />
      </LinkWrapper>
      <HeroAboutSection/>
      <CapabilitiesSection/>
      <ExperienceSection/>
      <EducationSection/>
    </Container>
  );
};
