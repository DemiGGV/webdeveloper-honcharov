import { ActionBox } from '../Utils/ActionBox/ActionBox.jsx'
import { 
  Title,
  SubText,
  Container,
  SubContainer, } from "./HeroSection.styled";
import { ImageComponent } from '../Utils/ImageComponent/ImageComponent.jsx';

export const HeroSection = ({ id }) => {
  return (    
      <Container id={id}>
         <SubContainer>
        <Title>Hi, i am Heorhii Honcharov</Title>
        <SubText>
          A Stuttgart based fullstack developer passionate about building
          accessible and user friendly websites with React.js and Node.js.
        </SubText>
        <ActionBox download={false} />
      </SubContainer>
      <ImageComponent maxImgWidth="30rem" imageSrc="../src/assets/images/image-hero.png" altText="Foto Web-Developer Heorhii Honcharov" />
      </Container>
  );
};
