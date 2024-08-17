import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from '../MobileMenu/MobileMenu.jsx';
import {
  HeaderContainer,
  StyledText,
  Navigation,
  StyledLink,
} from './Header.styled';

export const Header = () => {
  const location = useLocation();
  const [ isMobMenuOpen, setIsMobMenuOpen ] = useState( false );
  
  const toggleMobileMenu = () => {
    setIsMobMenuOpen( !isMobMenuOpen );
  };

  useEffect(() => {
    setIsMobMenuOpen(false)
  }, [location.hash]);


  return (
    <HeaderContainer>
      <StyledText>Heorhii Honcharov</StyledText>
      <MobileMenu toggleMobileMenu = { toggleMobileMenu } isOpen = { isMobMenuOpen }/>
      <Navigation>
        <StyledLink to="#work">
          Work
        </StyledLink>
        <StyledLink to="#about">
          About
        </StyledLink>
        <StyledLink to="#contact">
          Contact
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
