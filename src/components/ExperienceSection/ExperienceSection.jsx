import { ListItemComponent } from '../Utils/ListItemComponent/ListItemComponent';
import {
  Container,
  SubContainer,
  Title,
  ExperiencesList,
} from './ExperienceSection.styled';

export const ExperienceSection = () => {
  const experience = [
    {
      profession: 'Fullstack Developer',
      company: 'Freelance',
      time: 'Jan 2024 - Present',
      description:
        'Intensive study of German during the first half of the year. Now have a B1-level. Then, refactoring old code. Redesigning and developing this site. Continuing to learn every day. Writing code is a real pleasure for me',
    },
    {
      profession: 'Fullstack Developer',
      company: 'GoIT',
      time: 'Sep 2023 - Jan 2024',
      description:
        'Work as Team Lead on two projects, team of ten to twelve developers. Designing the server side of the site for two projects. Refactoring other people`s code. Mentoring on the project where I was a Team Lead. Of course, writing and debugging unit tests',
    },
    {
      profession: 'SEO-specialist',
      company: 'ITDevSEO',
      time: 'March 2017 - Oct 2020',
      description:
        'Deploying, administering and maintaining a hosted website. Adjustment of structure and design with the help of the WordPress CMS. Creating a semantic kernel for the site. Working with tools: Google Search Console, Google Analytics, Serpstat, SimilarWeb, Screaming Frog SEO Spider and PageSpeed Insights. Working with link mass: Google Ads, Yandex Wordstat Assistant, Google Trends, Text.ru',
    },
  ];

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
