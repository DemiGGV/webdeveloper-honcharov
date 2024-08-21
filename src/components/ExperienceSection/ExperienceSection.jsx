import { ListItemComponent } from '../Utils/ListItemComponent/ListItemComponent';
import {
  Container,
  SubContainer,
  Title,
  ExperiencesList,
} from './ExperienceSection.styled';

import { experience } from '../../assets/Data/data.js'

export const ExperienceSection = () => {
    return (
    <Container>
      <SubContainer>
        <Title>My&nbsp;Experience</Title>
        <ExperiencesList>
          {experience.map((item, indx) => (
            <li key={indx}>
              <ListItemComponent data={item} />
            </li>
          ))}
        </ExperiencesList>
      </SubContainer>
    </Container>
  );
};
