import { ResponsiveImage } from '../ResponsiveImg/ResponsiveImg.jsx';
import { 
  Title,
  SubText,
  Container,
  SubContainer, } from "./HeroSection.styled";

export const HeroSection = ({ id }) => {
  return (    
      <Container id={id}>
         <SubContainer>
        <Title>Hi, i am Heorhii Honcharov</Title>
        <SubText>
          A Stuttgart based fullstack developer passionate about building
          accessible and user friendly websites with React.js and Node.js.
        </SubText>
      </SubContainer>
      <ResponsiveImage
        imgName="hero"
        alt="Photo by Heorhii Honcharov - Fullstack Developer"
        maxHeight="400"
        ext="png"
      />
      </Container>
  );
};
