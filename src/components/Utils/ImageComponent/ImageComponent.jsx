import { ImageFadeBox, ImageStyled } from './ImageComponent.styled';

export const ImageComponent = ({
  maxImgWidth = 'fit-content',
  imageSrc = 'src/assets/images/placeholder.png',
  altText = 'Placegolder Image',
}) => {
  return (
    <ImageFadeBox $maxImgWidth={maxImgWidth}>
      <ImageStyled src={imageSrc} alt={altText} />
    </ImageFadeBox>
  );
};
