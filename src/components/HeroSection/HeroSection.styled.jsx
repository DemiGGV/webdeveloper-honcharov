import styled from '@emotion/styled';

export const Container = styled.div`

@media screen and (min-width: 768px) {
    padding-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 90px;
    gap: 80px;
  }
`;

export const SubContainer = styled.div`
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    flex-shrink: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const Title = styled.h1`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 57px;
  line-height: 1;
  color: var(--white-color);
  margin-bottom: 16px;
  flex-shrink: 2;

  @media screen and (min-width: 768px) {
    font-size: 75px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    font-size: 101px;
    line-height: 0.9;
  }
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
  margin-bottom: 32px;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;
