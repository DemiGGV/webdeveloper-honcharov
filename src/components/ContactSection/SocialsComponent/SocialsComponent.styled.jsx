import styled from 'styled-components';

// SubContainer
export const SubContainer = styled.div`
  display: flex;
  gap: 24px;
`;
// SocialLink
export const SocialLink = styled.a`
  height: fit-content;
  width: fit-content;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--accent-color);
  & > svg {
    transition: all 0.2s ease;
  }
  &:hover {
    color: var(--white-color);
    & > svg {
      scale: 1.1;
    }
  }
`;
