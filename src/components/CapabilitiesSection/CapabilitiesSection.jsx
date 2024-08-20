import { ResponsiveImage } from '../Utils/ResponsiveImg/ResponsiveImg';
import {
  Container,
  SubContainer,
  Title,
  SubSubContainer,
  Description,
  CapabilitiesList,
  Capability,
  ListItem,
} from './CapabilitiesSection.styled';

export const CapabilitiesSection = () => {
  const capabilities = [
    'HTML',
    'CSS/SASS',
    'Figma',
    'JavaScript',
    'TypeScript',
    'React',
    'Redux/RTK',
    'RestAPI',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'MySQL',
    'Sequalize',
    'Redis',
    'Docker',
    'Git/GitHUB',
  ];

  return (
    <Container>
      <ResponsiveImage
        imgName="about"
        alt="Full picture Heorhii Honcharov"
        ext="png"
      />
      <SubContainer>
        <Title>My&nbsp;capabilities</Title>
        <SubSubContainer>
          <Description>
            I&apos;m always looking for new skills, but this is a list of
            technologies I&apos;ve already used in my projects. The list will
            continue to grow...
          </Description>
          <CapabilitiesList>
            {capabilities.map((item, indx) => (
              <ListItem key={indx}>
                <Capability>{item}</Capability>
              </ListItem>
            ))}
          </CapabilitiesList>
        </SubSubContainer>
      </SubContainer>
    </Container>
  );
};
