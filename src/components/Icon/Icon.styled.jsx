import styled from 'styled-components';

export const IconWrapper = styled.div`
position: relative;
  z-index: 101;
  width: 32px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Line1 = styled.div`
  top: 0;
  width: 100%;
  height: 2px;
  background-color: var(--gray-color);  
  box-shadow: var(--small-glow-shadow);
  transition: all 0.2s ease-in-out;
  ${props => (props.$isOpen ? 'transform: rotate(45deg) translate(2px, 8px);' : '')}
`;

export const Line2 = styled.div`
bottom: 0;
  width: 100%;
  height: 2px;
  box-shadow: var(--small-glow-shadow);
  background-color: var(--gray-color);  
  transition: all 0.2s ease-in-out;
  ${props => (props.$isOpen ? 'transform: rotate(-45deg) translate(2px, -8px);' : '')}
`;
