import { Icon } from './Icon/Icon';
import {
  MobileNavigation,
  StyledLink,
  MobileMenuWrapper
} from './MobileMenu.styled.jsx';

export const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  
  return (
    <>
      <Icon toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
      <MobileNavigation className={isOpen ? '' : 'visually-hidden'} >
        <MobileMenuWrapper>
          <StyledLink smooth to="/#">Home</StyledLink>
          <StyledLink smooth to="/#work">Work#</StyledLink>
          <StyledLink smooth to="/#about">About#</StyledLink>
          <StyledLink smooth to="/#contact">Contact#</StyledLink>
          <StyledLink to="/about-me">Details</StyledLink>
        </MobileMenuWrapper>
      </MobileNavigation>
    </>
  );
};
