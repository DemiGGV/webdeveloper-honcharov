import { PictureStyled,ImgStyled } from './ResponsiveImg.styled';

export const ResponsiveImage = ({
  imgName,
  alt,
  maxHeight = '400',
  ext = 'jpg',
}) => {

  const maxMobileWidth = 420;
  const maxTabletWidth = 768;
  const maxDesktopWidth = 1440;

  const publicUrl = import.meta.env.BASE_URL;
  const mediaRule = (widthValue) => {
    return `(min-width: ${widthValue}px)`;
  };

  return (
    <PictureStyled>
      <source
        srcSet={`${publicUrl}/images/${imgName}-mobile@1x.${ext} 1x, ${publicUrl}/images/${imgName}-mobile@2x.${ext} 2x`}
        media={mediaRule(maxMobileWidth)}
      />
      <source
        srcSet={`${publicUrl}/images/${imgName}-tablet@1x.${ext} 1x, ${publicUrl}/images/${imgName}-tablet@2x.${ext} 2x`}
        media={mediaRule(maxTabletWidth)}
      />
      <source
        srcSet={`${publicUrl}/images/${imgName}-desktop@1x.${ext} 1x, ${publicUrl}/images/${imgName}-desktop@2x.${ext} 2x" `}
        media={mediaRule(maxDesktopWidth)}
      />
      <ImgStyled
        src={`${publicUrl}/images/${imgName}-desktop@1x.${ext}`}
        alt={`${alt}`}
        $maxHeight={maxHeight}
        loading="lazy"
      />
    </PictureStyled>
  );
};
