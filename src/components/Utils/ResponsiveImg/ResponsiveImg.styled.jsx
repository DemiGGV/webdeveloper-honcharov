import styled from 'styled-components';

export const PictureStyled = styled.picture`
  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  background-color: var(--gray-color);
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    height: 700px;
  }
`;

export const ImgStyled = styled.img`
  max-width: 100%;
  object-fit: contain;
  height: 100%;
`;
