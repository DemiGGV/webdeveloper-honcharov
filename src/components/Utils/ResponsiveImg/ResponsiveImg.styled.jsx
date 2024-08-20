import styled from 'styled-components';

export const PictureStyled = styled.picture`
  padding: 20px 20px 0 20px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  background-color: var(--gray-color);
  border-radius: 16px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: fit-content;
    height: 400px;
  }

  @media screen and (min-width: 1440px) {
    min-width: fit-content;
    height: 700px;
  }
`;

export const ImgStyled = styled.img`
  width: 100%;
  object-fit: contain;
`;
