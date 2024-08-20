import { ActionBox } from '../Utils/ActionBox/ActionBox.jsx';
import {
  Title,
  Skills,
  SubTitle,
  SubText,
  Container,
  SubContainer,
} from './HeroAboutSection.styled';

export const HeroAboutSection = () => {
  return (
    <Container>
      <div>
      <Title>About&nbsp;me</Title>
      <Skills>Key skills: HTML, CSS, JavaScript, TypeScript, React, Node.js</Skills>
      </div>
      <SubContainer>
        
        <SubTitle>
          I am a full-stack developer based in Stuttgart. Have a background as a
          technical engineer.
        </SubTitle>
        <SubText>
          I am a frontend developer living in Stuttgart, looking for interesting
          opportunities. Have a background as a technical engineer. I like to
          focus on accessibility in development. Passionate and curious about
          problem solving. Currently learning Reactjs, Webflow and a bit of
          Designing. While I`m not programming, i enjoy cycling, astronomy, and
          learning new things. Learning all the time to improve my skills.
        </SubText>
        <ActionBox download={true}/>
      </SubContainer>
    </Container>
  );
};
