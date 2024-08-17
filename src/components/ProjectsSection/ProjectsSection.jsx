import { OneProject } from '../OneProject/OneProject';
import {
  Container,
  SectionHeader,
  TitleSection,
  SubTitleSection,
  ProjectsList
} from './ProjectsSection.styled';

const data = [
  {
    id: 1,
    tumbnail: '',
    image: '',
    description: '',
    link: '',
  },
  {
    id: 1,
    tumbnail: '',
    image: '',
    description: '',
    link: '',
  },
  {
    id: 1,
    tumbnail: '',
    image: '',
    description: '',
    link: '',
  },
  {
    id: 1,
    tumbnail: '',
    image: '',
    description: '',
    link: '',
  },
  {
    id: 1,
    tumbnail: '',
    image: '',
    description: '',
    link: '',
  },
];
// image - small big
// description
// outside link

export const ProjectsSection = ({ id }) => {
  return (
    <Container id={id}>
      <SectionHeader>
        <TitleSection></TitleSection>
        <SubTitleSection></SubTitleSection>
      </SectionHeader>
      <ProjectsList>
      {data.length &&
        data.map(({ id, tumbnail, image, description, link }) => (
          <OneProject
            key={id}
            tumbnail={tumbnail}
            image={image}
            description={description}
            link={link}
          />
        ))}
        </ProjectsList>
    </Container>
  );
};
