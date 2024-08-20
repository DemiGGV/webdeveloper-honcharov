import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MobileMenu } from './MobileMenu/MobileMenu.jsx';
import {
  HeaderContainer,
  StyledLogo,
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
  }, [location.hash, location.pathname]);


  return (
    <HeaderContainer>
      <StyledLogo smooth to="/#">Full-stack&nbsp;Developer</StyledLogo>
      <MobileMenu toggleMobileMenu = { toggleMobileMenu } isOpen = { isMobMenuOpen }/>
      <Navigation>
        <StyledLink smooth to="/#work">
          Work
        </StyledLink>
        <StyledLink smooth to="/#about">
          About
        </StyledLink>
        <StyledLink smooth to="/#contact">
          Contact
        </StyledLink>
        <StyledLink to="/about-me">
          Details
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
