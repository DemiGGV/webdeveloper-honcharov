import { Image } from './ResponsiveImg.styled';

export const ResponsiveImage = ({imgName, alt, maxHeight = '400', ext = "jpg"}) => {

  // Images should be placed in the PUBLIC/IMAGES Dir...
  // Should be named using the following template: "name"-mobile/tablet/desktop-@1x/@2x.jpg/.png
  //   Media rules:

  const maxMobileWidth = 600;
  const maxTabletWidth = 768;
  const maxDesktopWidth = 1200;

  const publicUrl = import.meta.env.BASE_URL;
  const mediaRule = (widthValue) => {
    return `(max-width: ${widthValue}px)`;
  };

  return (
    <picture>
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
      <Image
        src={`${publicUrl}/images/${imgName}-desktop@1x.${ext}`}
        alt={`${alt} @maxHeight = ${maxHeight}`}
        loading="lazy"
      />
    </picture>
  );
};
