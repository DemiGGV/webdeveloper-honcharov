import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
`;

export const StyledText = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  color: var(--main-bg-color);
  display: contents;

  @media screen and (min-width: 600px) {
    font-size: 16px;
    line-height: 1;
  }
`;

export const ContactButton = styled(Link)`
  height: 48px;
  padding: 0 4px 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  border-radius: 48px;
  background-color: var(--accent-color);
  &:hover,
  &:focus {
  }
`;

export const IconSend = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--second-bg-color);
`;

export const RoundButton = styled(Link)`
  &:hover,
  &:focus {
  }
`;

export const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--second-bg-color);
`;
