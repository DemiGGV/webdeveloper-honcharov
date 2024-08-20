import { styled } from 'styled-components';

// CardContainer,
export const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;
// CardHeader,
export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media screen and (min-width: 768px) {
    gap: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
// Profession,
export const Profession = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--white-color);
  flex: 1;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
// Time,
export const Time = styled.p`
  text-align: right;
  font-size: 16px;
  line-height: 1.6;
  color: var(--gray-color);
  flex: 1;

  @media screen and (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.5;
  }
`;
// Company,
export const Company = styled(Time)`
  text-align: left;
  color: var(--accent-color);
`;
// Description
export const Description = styled(Time)`
  text-align: left;
`;
