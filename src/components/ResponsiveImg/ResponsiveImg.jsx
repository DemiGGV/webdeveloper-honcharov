import { Image } from './ResponsiveImg.styled';

export const ResponsiveImage = (imgName, alt, maxHeight) => {
  const publicUrl = import.meta.env.BASE_URL;

  return (
    <picture>
      {/* Версия изображения для экранов с шириной до 600px */}
      <source
        srcSet={`${publicUrl}/images/${imgName}-mobile@1x.jpg 1x, ${publicUrl}/images/${imgName}-mobile@2x.jpg 2x`}
        media="(max-width: 600px)"
      />
      {/* Версия изображения для экранов с шириной до 1200px */}
      <source
        srcSet={`${publicUrl}/images/${imgName}-tablet@1x.jpg 1x, ${publicUrl}/images/${imgName}-tablet@2x.jpg 2x`}
        media="(max-width: 1200px)"
      />
      {/* Версия изображения для экранов более 1200px */}
      <source
        srcSet={`${publicUrl}/images/${imgName}-desktop@1x.jpg 1x, ${publicUrl}/images/${imgName}-desktop@2x.jpg 2x" `}
        media="(min-width: 1201px)"
      />
      {/* Базовое изображение для браузеров, которые не поддерживают <picture> */}
      <Image
        src={`${publicUrl}/images/${imgName}-desktop@1x.jpg" alt=${alt} @maxHeight = ${maxHeight} `}
      />
    </picture>
  );
};