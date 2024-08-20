import { ListItemComponent } from '../Utils/ListItemComponent/ListItemComponent';
import {
  Container,
  SubContainer,
  Title,
  ExperiencesList,
} from './EducationSection.styled';

export const EducationSection = () => {
  const experience = [
    {
      profession: 'Fullstack Developer',
      company: 'GoIT school / Kyiv, Ukraine',
      time: 'November 2022 - August 2023',
      description:
        'And here I am back at university! Again my brains are boiling from the volume of new information. HTML and CSS already seem to be familiar to me - and I`m discovering a new world again! Javascript and the site comes to life, finally I`m not just a CMS user, but I can write all the code for the site myself. Then I learn React and again so much information, but it`s a completely different approach to website development. The teachers at this school are simply the best. The course on server-side development with Node.js and mobile development with React Native - complete my capabilities as a fullstack developer.',
    },
    {
      profession: 'junior SEO-specialist',
      company: 'IDP Hub / Kyiv, Ukraine',
      time: 'Apr 2016 - Jul 2016',
      description:
        'Here I got my first real knowledge of how the Internet functions. I got acquainted with the Wordpress content management system, learned how to work with hosting, learned what a domain name is and how any website looks like through the eyes of a Google bot. I learned how to make my site rank better in Google search results. This is where my career in IT started.',
    },
    {
      profession: 'Engineering technology /undergraduate degree/',
      company: 'Pryazovskyi State Technical University / Mariupol, Ukraine',
      time: 'Sep 1993 - Aug 1996',
      description:
        'I had excellent grades in higher mathematics and resistance of materials. At university I was introduced to programming in Pascal and C, and was a participant in an initiative group of students developing an applied program-guide for the course “Materials Science”. Applied mathematics, probability theory and mathematical analysis were also interesting in the curriculum',
    },
  ];

  return (
    <Container>
      <SubContainer>
        <Title>My&nbsp;Education</Title>
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
