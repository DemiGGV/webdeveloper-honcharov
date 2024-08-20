import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;
  height: 100vh;

  padding: 20px 16px;

  @media screen and (min-width: 420px) {
    max-width: 420px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 20px 50px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 20px 100px;
  }
`;
