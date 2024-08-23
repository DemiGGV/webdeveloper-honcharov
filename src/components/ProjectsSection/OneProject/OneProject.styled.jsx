import styled from 'styled-components';

export const Project = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 60px;
  }
`;

export const ImageWraper = styled.div`
  max-width: 100%;
  padding: 20px;

  border-radius: 8px;
  overflow: hidden;

  flex: 1;
  cursor: pointer;

  transition: all 0.2s ease;
  background-color: var(--second-bg-color);

  @media screen and (min-width: 768px) {
    padding: 60px 20px;
    min-width: 380px;
  }

  @media screen and (min-width: 1440px) {
    padding: 20px;
    min-width: 380px;
  }

  &:hover {
    background-color: var(--weak-accent-color);
  }
`;

export const ProjectCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: min-content;
`;

export const ProjectTitle = styled.h3`
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
  color: var(--white-color);
`;

export const ProjectSubTitle = styled.h4`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--white-color);
  display: inline;
`;

export const ProjectDescription = styled.p`
  max-height: 150px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--gray-color);
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background: linear-gradient(
      to bottom,
      transparent,
      black 100%
    );
  }

  @media screen and (min-width: 1440px) {
    max-height: 250px;
  }
`;

export const ProjectSkills = styled.p`
  padding-bottom: 10px;
  border-bottom: 1px solid var(--gray-color);
`;

export const ProjectLink = styled.a`
  margin-left: auto;
  margin-right: 0;
  display: inline;
  padding: 12px;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent-color);
  }
`;
