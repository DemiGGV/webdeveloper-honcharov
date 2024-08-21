import styled from 'styled-components';

export const ImageWraper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  max-height: 550px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  border-radius: 16px;
  overflow: hidden;
  
  transition: all 0.2s ease;
  background-color: var(--second-bg-color);
  
  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 5px;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    max-height: fit-content;
  }
`;

export const ProjectTitle = styled.h3`
  padding-left: 20px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
  color: var(--white-color);
`;

export const ProjectDescription = styled.p`
  padding: 0 8px;
  border-bottom: 1px solid var(--gray-color);
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    height: fit-content;
  }
`;

export const ProjectSubTitle = styled.h4`
  padding: 8px 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--white-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--weak-accent-color);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--accent-color);
    color: var(--main-bg-color);
    box-shadow: var(--small-glow-shadow);
  }
`;

export const ProjectLink = styled.a`
  padding: 12px;
  display: flex;
  gap: 8px;
  justify-content: end;
  align-items: center;
`;
