import { OneProject } from './OneProject/OneProject';
import {
  Container,
  SectionHeader,
  TitleSection,
  SubTitleSection,
  ProjectsList
} from './ProjectsSection.styled';

import { data } from '../../assets/Data/data.js'

export const ProjectsSection = ({ id }) => {
  return (
    <Container id={id}>
      <SectionHeader>
        <TitleSection>Featured Projects</TitleSection>
        <SubTitleSection>Here are some of the selected projects that showcase my passion for front-end development.</SubTitleSection>
      </SectionHeader>
      <ProjectsList>
      {data.length &&
        data.map((item) => (
          <OneProject
            key={item.id}
            item={item}
          />
        ))}
        </ProjectsList>
    </Container>
  );
};