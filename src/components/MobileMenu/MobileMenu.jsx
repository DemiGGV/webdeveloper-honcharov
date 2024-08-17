
// import { IconWrapper } from "MobileMenu.styled.jsx";
import { Icon } from '../Icon/Icon';
import {
  MobileNavigation,
  StyledText,
  StyledLink,
  MobileMenuWrapper
} from './MobileMenu.styled.jsx';

export const MobileMenu = ({ toggleMobileMenu, isOpen }) => {
  
  return (
    <>
      <Icon toggleMobileMenu={toggleMobileMenu} isOpen={isOpen} />
      {/* <MobileNavigation $isOpen={isOpen}> */}
      <MobileNavigation $isOpen={isOpen}>
        <MobileMenuWrapper>
          <StyledText>Mobile menu:</StyledText>
          <StyledLink to="#work">Work</StyledLink>
          <StyledLink to="#about">About</StyledLink>
          <StyledLink to="#contact">Contact</StyledLink>
        </MobileMenuWrapper>
      </MobileNavigation>
    </>
  );
};
