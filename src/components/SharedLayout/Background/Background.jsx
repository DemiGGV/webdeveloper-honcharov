import {
  ContainerLayout,
  GradientContainer,
  CircleContainer,
} from './Background.styled';

export const Background = ({ children }) => {
  return (
    <>
      {children}
      <ContainerLayout />
      <GradientContainer />
      <CircleContainer />
    </>
  );
};