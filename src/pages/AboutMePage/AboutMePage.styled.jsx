import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 64px;
  
  @media screen and (min-width: 768px) {
    margin-top: 120px;
  }
`;

export const LinkWrapper = styled.div`
  ${(props) => (props.$isScrolled ? `` : `display: none`)};
  position: sticky;
  top: 16px;
  margin-left: auto;
`;
