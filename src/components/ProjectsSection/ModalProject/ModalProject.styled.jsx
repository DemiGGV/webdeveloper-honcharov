import styled from 'styled-components';

export const ButtonCloseWrapper = styled.div`
  display: inline;
  float: inline-end;
  line-height: 1;
  cursor: pointer;
`;

export const ImageWraper = styled.div`
  width: 100%;
  margin-bottom: 25px;
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
  gap: 15px;
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
  /* border-bottom: 1px solid var(--gray-color); */
  padding-bottom: 5px;

  @media screen and (min-width: 768px) {
    height: fit-content;
  }
`;

export const ProjectSubTitle = styled.a`
  height: 48px;
  padding: 0 25px;
  border-radius: 50px;
  max-width: fit-content;

  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  
  color: var(--main-bg-color);
  background-color: var(--accent-color);
  
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  text-transform: uppercase;

  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    box-shadow: var(--small-glow-shadow);
  }
`;

export const ProjectLink = styled.p`
  padding: 12px;
  display: flex;
  gap: 8px;
  justify-content: end;
  align-items: center;
`;
