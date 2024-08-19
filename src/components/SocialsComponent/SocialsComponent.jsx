import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoWhatsapp,
} from 'react-icons/io5';
import {
  SubContainer,
  SocialLink,
} from './SocialsComponent.styled';

const socials = [
  {
    icon: (
      <IoLogoLinkedin
        style={{
          width: '32px',
          height: '32px',
        }}
      />
    ),
    link: 'https://www.linkedin.com/in/heorhii-honcharov/',
  },
  {
    icon: (
      <IoLogoGithub
        style={{
          width: '32px',
          height: '32px',
        }}
      />
    ),
    link: 'https://github.com/DemiGGV',
  },
  {
    icon: (
      <IoLogoFacebook
        style={{
          width: '32px',
          height: '32px',
        }}
      />
    ),
    link: 'https://www.facebook.com/DemiUA',
  },
  {
    icon: (
      <IoLogoWhatsapp
        style={{
          width: '32px',
          height: '32px',
        }}
      />
    ),
    link: 'https://api.whatsapp.com/send?phone=491758761509',
  },
];

export const SocialsComponent = () => {
  return (
    <SubContainer>
      {socials.map(({ icon, link }, index) => {
        return (
            <SocialLink key={index} href={link} target="_blank" rel="noopener noreferrer">
              {icon}
            </SocialLink>
        );
      })}
    </SubContainer>
  );
};
