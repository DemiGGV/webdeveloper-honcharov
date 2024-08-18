import styled from '@emotion/styled';

export const Container = styled.section`

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
  
  @media screen and (min-width: 1440px){
    gap: 140px;
  }
`;
