import styled from '@emotion/styled';

export const ImageStyled = styled.img`
  ${(props) => (props.$maxHeight ? `max-height: ${props.$maxHeight}px;` : 'max-height: 400px;')}
  object-fit: contain;
  box-shadow: var(--small-glow-shadow);
  /* @media screen and (min-width:768px) {
    
  } */
  
  @media screen and (min-width: 1440px) {
    max-height: fit-content;
    height:inherit;
    
  }
`;