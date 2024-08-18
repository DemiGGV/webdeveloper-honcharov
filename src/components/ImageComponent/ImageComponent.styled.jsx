import styled from '@emotion/styled';

export const ImageStyled = styled.img`
  /* width: 100%; */
  ${(props) => (props.$maxHeight ? `max-height: ${props.$maxHeight}px;` : 'max-height: 400px;')}
  height: auto;
  object-fit: contain;
  box-shadow: var(--small-glow-shadow);
`;