import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

export const Link = styled(HashLink)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-transform: lowercase;
  text-decoration: underline;

  opacity: 0.5;
  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
      color: var(--accent-color);
      text-shadow: var(--small-glow-shadow);
    }
  }
  @media (hover: none) {
    &:active {
      opacity: 1;
      color: var(--accent-color);
      text-shadow: var(--small-glow-shadow);
    }
  }
`;
