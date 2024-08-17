import styled from '@emotion/styled';

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 57px;
  line-height: 1;
  color: var(--white-color);
  /* text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff; */
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--gray-color);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  
  @media screen and ( max-width:330px ) {
    height: 320px;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  max-height: 400px;
  height: auto;
  object-fit: contain;
`;
