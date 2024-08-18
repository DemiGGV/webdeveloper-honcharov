import styled from '@emotion/styled';

export const PictureStyled = styled.picture`
  display: flex;
  padding: 20px 20px 0 20px;
  width: 100%;
  max-width: 343px;
  margin: 0 auto;
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
  object-fit: cover;
  @media screen and (min-width: 768px) and (max-width: 1439px){
    width: 300px;    
  }
`;
