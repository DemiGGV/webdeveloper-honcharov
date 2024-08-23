import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Navigation = styled.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledLogo = styled(Link)`
  padding: 20px 0;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 28px;
  line-height: 40px;
  vertical-align: middle;
  letter-spacing: -0.01em;

  display: inline-block;
  color: var(--white-color);
  text-shadow: var(--small-glow-shadow);
`;

export const StyledLink = styled(Link)`
  padding: 20px 20px;
  color: var(--white-color);
  text-shadow: var(--glow-shadow);
  transition:
    color 0.2s,
    text-shadow 0.2s;

  &:hover {
    color: var(--white-color);
    text-shadow: var(--hover-shadow);
  }
`;
