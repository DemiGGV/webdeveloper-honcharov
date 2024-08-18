import styled from '@emotion/styled';

export const Project = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
`;

export const ImageWraper = styled.div`
  width: 100%;
  min-width: fit-content;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 16px;
  overflow: hidden;
  
  cursor: pointer;

  transition: all 0.2s ease;
  background-color: var(--second-bg-color);
  scale: 1;
  
  @media screen and (min-width: 600px) {
    padding: 30px;
    height: 495px;
}

  &:hover{
    background-color: var(--weak-accent-color);
    scale: 1.01;
  }
`;

export const ProjectCard = styled.div`
  max-height: 495px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 8px;
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
  margin-right: 8px;
  color: var(--white-color);
`;

export const ProjectDescription = styled.p`
  height: 150px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--gray-color);

  &:after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      var(--second-bg-color) 100%
    );
  }
  @media screen and (min-width: 600) {
    height: 400px;
  }
`;

export const ProjectSkills = styled.p`
padding-bottom: 10px;
  border-bottom: 1px solid var(--gray-color);
`;

export const ProjectLink = styled.a`
  padding: 12px;
  border-bottom: 1px solid var(--gray-color);
  display: flex;
  gap: 8px;
  justify-content: end;
  &:hover {
    color: var(--accent-color);
  }
`;
