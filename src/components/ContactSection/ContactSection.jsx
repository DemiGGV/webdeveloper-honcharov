import { ContactForm } from './ContactForm/ContactForm';
import { SocialsComponent } from './SocialsComponent/SocialsComponent';
import {
  Container,
  TextContainer,
  ContactHeader,
  SectionTitle,
  InviteText,
  InviteLink,
} from './ContactSection.styled';


export const ContactSection = ({ id }) => {
  const publicUrl = import.meta.env.BASE_URL;
  return (
    <Container id={id}>
      <TextContainer>
        <SectionTitle>Let&apos;s&nbsp;connect</SectionTitle>
        <ContactHeader>
          <InviteText>
          Say hello to me&nbsp;
            <InviteLink
              href={'mailto:heorhii.honcharov@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
            >
              with a letter
            </InviteLink>
          </InviteText>
          <InviteText>
            For more info, here&apos;s my&nbsp;
            <InviteLink
              href={`${publicUrl}/assets/Application-as-Fullstack-Developer.pdf`}
              download
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </InviteLink>
          </InviteText>
        </ContactHeader>
        <SocialsComponent />
      </TextContainer>
      <ContactForm />
    </Container>
  );
};
