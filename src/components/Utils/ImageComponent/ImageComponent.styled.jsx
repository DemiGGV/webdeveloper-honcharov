import styled from 'styled-components';

export const ImageFadeBox = styled.div`
  position: relative;
  display: inline-block;
  background-color: gray;
  ${(props) =>
    props.$maxImgWidth
      ? `max-width: ${props.$maxImgWidth};`
      : 'max-width: fit-content;'}
  mask-image: linear-gradient(to top, transparent, var(--second-bg-color) 2%),
    linear-gradient(to bottom, transparent, var(--second-bg-color) 2%),
    linear-gradient(to left, transparent, var(--second-bg-color) 2%),
    linear-gradient(to right, transparent, var(--second-bg-color) 2%);
  mask-composite: intersect;
`;

export const ImageStyled = styled.img`
  display: block;
  width: 100%;
  height: auto;
  mask-image: linear-gradient(to top, transparent, var(--second-bg-color) 2%),
    linear-gradient(to bottom, transparent, var(--second-bg-color) 2%),
    linear-gradient(to left, transparent, var(--second-bg-color) 2%),
    linear-gradient(to right, transparent, var(--second-bg-color) 2%);
  mask-composite: intersect;
`;
