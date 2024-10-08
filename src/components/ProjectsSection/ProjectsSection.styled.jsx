import styled from 'styled-components';

export const Container = styled.section`
  padding-top: 64px;
  border-top: 1px solid var(--second-bg-color);
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 64px;
`;
export const TitleSection = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 43px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 76px;
  }
`;
export const SubTitleSection = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
`;
export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 64px;

  @media screen and (min-width: 1440px) {
    gap: 140px;
  }
`;
