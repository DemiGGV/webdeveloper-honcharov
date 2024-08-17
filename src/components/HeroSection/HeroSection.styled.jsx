import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 40px 0 60px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
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
    align-items: center;
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

  @media screen and (min-width: 600px) {
    font-size: 75px;
    line-height: 1;
  }
  @media screen and (min-width: 1200px) {
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

  @media screen and (min-width: 600px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: var(--gray-color);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  flex-shrink: 1;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: 330px) {
    height: 320px;
  }
  @media screen and (min-width: 600px) {
    flex-grow: 3;
    height: 400px;
  }
`;
