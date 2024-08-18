import { ImageStyled } from './ImageComponent.styled';

export const ImageComponent = ({imgName, alt, maxHeight = '400', ext = "jpg"}) => {

  const publicUrl = import.meta.env.BASE_URL;

  return (
      <ImageStyled
        srcset={
            `${publicUrl}/images/${imgName}@1x.${ext} 1x,
             ${publicUrl}/images/${imgName}@2x.${ext} 2x`}
        src={`${publicUrl}/images/${imgName}@1x.${ext}`}
        alt={`${alt}`}
        loading = "lazy"
        decoding = "async"
        $maxHeight = {maxHeight}
      />
  );
};