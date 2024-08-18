import { OneProject } from '../OneProject/OneProject';
import {
  Container,
  SectionHeader,
  TitleSection,
  SubTitleSection,
  ProjectsList
} from './ProjectsSection.styled';

import { data } from '../../assets/Data/data.js'

export const ProjectsSection = ({ id }) => {



  const handleModalOpen = (title,image,description) => {
    console.log(title,image,description)
  }

  return (
    <Container id={id}>
      <SectionHeader>
        <TitleSection>Featured Projects</TitleSection>
        <SubTitleSection>Here are some of the selected projects that showcase my passion for front-end development.</SubTitleSection>
      </SectionHeader>
      <ProjectsList>
      {data.length &&
        data.map(({ id, title, image, alt, description, skills, link }) => (
          <OneProject
            key={id}
            handleModalOpen={handleModalOpen}
            title={title}
            image={image}
            alt={alt}
            description={description}
            skills={skills}
            link={link}
          />
        ))}
        </ProjectsList>
    </Container>
  );
};