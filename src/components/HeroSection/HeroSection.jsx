import { ActionBox } from '../ActionBox/ActionBox.jsx';
import { ResponsiveImage } from '../ResponsiveImg/ResponsiveImg.jsx';
import {
  Title,
  SubText,
  ImageWrapper,
  Container,
  SubContainer,
} from './HeroSection.styled.jsx';

export const HeroSection = ({id}) => {
  return (
    <Container id={id}>
      <SubContainer>
        <Title>Hi, i am Heorhii Honcharov</Title>
        <SubText>
          A Stuttgart based fullstack developer passionate about building
          accessible and user friendly websites with React.js and Node.js.
        </SubText>
        <ActionBox />
      </SubContainer>
      <ImageWrapper>
        <ResponsiveImage
          imgName="hero"
          alt="Photo by Heorhii Honcharov - Fullstack Developer"
          maxHeight="400"
          ext="png"
        />
      </ImageWrapper>
    </Container>
  );
};
