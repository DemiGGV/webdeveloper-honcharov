import { ImageComponent } from '../Utils/ImageComponent/ImageComponent.jsx';
import {
  Title,
  SubTitle,
  SubText,
  Container,
  SubContainer,
  LinkStyled,
  ImageWrapper
} from './AboutSection.styled.jsx';

export const AboutSection = ({ id }) => {
  return (
    <Container id={id}>
      <Title>About&nbsp;me</Title>
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
        <LinkStyled to="/about-me/#">More about me</LinkStyled>
      </SubContainer>
      <ImageWrapper>
        <ImageComponent imageSrc="images/about.png" altText="Alternate foto developer"/>
      </ImageWrapper>
    </Container>
  );
};
