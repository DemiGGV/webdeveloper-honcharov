import Photo from '../../assets/images/image-mob.jpg';
import {
    Title,
    SubText,
    ImageWrapper,
    MainImage,
  } from './HeroSection.styled.jsx';

export const HeroSection = () => {
  return (
    <>
      <Title>Hi, i am Heorhii Honcharov</Title>
      <SubText>
        A Stuttgart based fullstack developer passionate about building
        accessible and user friendly websites with React.js and Node.js.
      </SubText>
      <ImageWrapper>
        <MainImage
          src={Photo}
          alt={'Heorhii Honcharov - Fullstack Developer'}
          loading="lazy"
        />
      </ImageWrapper>
    </>
  );
};
