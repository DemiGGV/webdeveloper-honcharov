import styled from 'styled-components';

export const ImageStyled = styled.img`
  ${(props) => (props.$maxHeight ? `max-height: ${props.$maxHeight};` : 'max-height: 400px;')}
  ${(props) => (props.$width ? `width: ${props.$width};` : 'width: 100%;')}
  object-fit: contain;
`;