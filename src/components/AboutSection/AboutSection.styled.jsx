import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 64px;
  border-top: 1px solid var(--second-bg-color);
  border-bottom: 1px solid var(--second-bg-color);

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 200px;
  }

  @media screen and (min-width: 1440px) {
    gap: 280px;
  }
`;

export const SubContainer = styled.div`
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
    flex-shrink: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 15px;
  }
`;

export const Title = styled.h2`
  @media screen and (max-width: 424px) {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-family: 'Bebas Neue', sans-serif;
    font-weight: 400;
    font-size: 43px;
    line-height: 1;
    letter-spacing: -0.02em;
    color: var(--white-color);
  }
  @media screen and (min-width: 1440px) {
    font-size: 101px;
    line-height: 0.9;
  }
`;

export const SubTitle = styled.h4`
  @media screen and (max-width: 424px) {
    display: none;
  }
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

  @media screen and (min-width: 768px) {
    margin-bottom: 53px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const LinkStyled = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
  border-bottom: 1px solid var(--accent-color);

  transition: all 0.2s ease;

  @media (hover: hover) {
    &:hover {
      color: var(--accent-color);
      text-shadow: var(--small-glow-shadow);
    }
  }
  @media (hover: none) {
    &:active {
      color: var(--accent-color);
      text-shadow: var(--small-glow-shadow);
    }
  }
`;

export const ImageWrapper = styled.div`
  margin-bottom: 64px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
