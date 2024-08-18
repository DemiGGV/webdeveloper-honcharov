// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

// position: absolute;
// width: 1px;
// height: 1px;
// margin: -1px;
// border: 0;
// padding: 0;
// white-space: nowrap;
// clip-path: inset(100%);
// clip: rect(0 0 0 0);
// overflow: hidden;

export const MobileNavigation = styled.nav`
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  width: 100vw;
  height: 100vh;

  background-color: var(--main-bg-color);
  opacity: 1;

  @media screen and ( min-width: 768px ) {
    display: none;
  }
`;

export const StyledText = styled.p`
  display: block;
  color: var(--white-color);
  text-shadow: var(--small-glow-shadow);
  transition:
    color 0.3s,
    text-shadow 0.3s;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: var(--white-color);
  text-shadow: var(--glow-shadow);
  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: var(--white-color);
    text-shadow: var(--hover-shadow);
  }
`;

export const MobileMenuWrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
