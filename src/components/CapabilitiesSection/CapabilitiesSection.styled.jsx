import { styled } from 'styled-components';
// Container,
export const Container = styled.section`

  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 40px;
  }
`;
//   SubContainer,
export const SubContainer = styled.div`
  padding-top: 64px;
  @media screen and (min-width: 768px) {
    padding: 80px 0;
    display: flex;
  }
  @media screen and (min-width: 1440px) {
    font-size: 76px;
  }
`;
//   Title,
export const Title = styled.h2`
  margin-bottom: 12px;

  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 43px;
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--white-color);

  @media screen and (min-width: 768px) {
    flex: 1;
    font-size: 58px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 76px;
  }
`;
//   SubSubContainer,
export const SubSubContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    gap: 30px;
  }
  @media screen and (min-width: 1440px) {
    gap: 50px;
  }
`;
//   Description,
export const Description = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;
//   CapabilitiesList,
export const CapabilitiesList = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 12px;
`;
// Item of list
export const ListItem = styled.li`
    border: 1px solid var(--gray-color);
    border-radius: 30px;
    box-shadow: var(--small-glow-shadow);
`;
//   Capability
export const Capability = styled.p`
  padding: 16px 24px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
`;