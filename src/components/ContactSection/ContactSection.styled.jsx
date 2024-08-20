import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 32px;
  @media screen and (min-width: 1440px){
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
  }
`;

export const TextContainer = styled.div`
  flex: 1;
`;

export const ContactHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 400;
  font-size: 43px;
  line-height: 1;
  margin-bottom: 16px;
  color: var(--white-color);
  
  @media screen and (min-width: 768px) {
    font-size: 58px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 76px;
  }
`;

export const InviteText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: var(--gray-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;

export const InviteLink = styled.a`
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: var(--white-color);
  border-bottom: 1px solid var(--accent-color);
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.5;
  }
  &:hover {
    color: var(--accent-color);
  }
`;
