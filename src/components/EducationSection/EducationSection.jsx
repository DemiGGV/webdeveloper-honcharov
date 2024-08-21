import { ListItemComponent } from '../Utils/ListItemComponent/ListItemComponent';
import {
  Container,
  SubContainer,
  Title,
  ExperiencesList,
} from './EducationSection.styled';

import { education } from '../../assets/Data/data.js'

export const EducationSection = () => {

  return (
    <Container>
      <SubContainer>
        <Title>My&nbsp;Education</Title>
        <ExperiencesList>
          {education.map((item, indx) => (
            <li key={indx}>
              <ListItemComponent data={item} />
            </li>
          ))}
        </ExperiencesList>
      </SubContainer>
    </Container>
  );
};
