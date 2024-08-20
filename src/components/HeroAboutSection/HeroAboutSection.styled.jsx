import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 80px;
  }

  @media screen and (min-width: 1440px) {
    gap: 120px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
    justify-content: space-between;
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

  @media screen and (min-width: 768px) {
    /* flex: 1; */
    font-size: 75px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
    font-size: 101px;
    line-height: 0.9;
  }
`;
export const Skills = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
  margin-bottom: 32px;
  text-shadow: var(--small-glow-shadow);

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.5;
  }  
`;
export const SubTitle = styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.4;
  color: var(--white-color);
  @media screen and (min-width: 768px) {
    font-weight: 500;
    font-size: 22px;
    line-height: 1.4;
    color: var(--white-color);
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 32px;
    line-height: 1.5;
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
