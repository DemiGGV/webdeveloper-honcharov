import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io5';
import { IoIosSend } from 'react-icons/io';
import {
  Container,
  ContactButton,
  StyledText,
  RoundButton,
  Icon,
  IconSend,
} from './ActionBox.styled.jsx';

export const ActionBox = () => {
  return (
    <Container>
      <ContactButton to="#contact">
        <StyledText>Contact&nbsp;Me</StyledText>
        <IconSend>
          <IoIosSend
            style={{
              color: '#d3e97a',
              width: '24px',
              height: '24px',
            }}
          />
        </IconSend>
      </ContactButton>
      <RoundButton
        href={'https://www.linkedin.com/in/heorhii-honcharov/'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <IoLogoLinkedin
            style={{
              color: '#d3e97a',
              width: '24px',
              height: '24px',
            }}
          />
        </Icon>
      </RoundButton>
      <RoundButton
        href={'https://github.com/DemiGGV'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon>
          <IoLogoGithub
            style={{
              color: '#d3e97a',
              width: '24px',
              height: '24px',
            }}
          />
        </Icon>
      </RoundButton>
    </Container>
  );
};
