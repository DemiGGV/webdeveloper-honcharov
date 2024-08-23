import { useState } from 'react';
import ReactModal from 'react-modal';

import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  Project,
  ProjectCard,
  ProjectTitle,
  ProjectSubTitle,
  ProjectDescription,
  ProjectSkills,
  ProjectLink,
  ImageWraper,
} from './OneProject.styled';
import { ImageComponent } from '../../Utils/ImageComponent/ImageComponent';
import { ModalProject } from '../ModalProject/ModalProject';

ReactModal.setAppElement('#root');

export const OneProject = ({ item }) => {
  const {
    title = 'Unknown',
    image = 'placeholder',
    alt = 'Can`t find image',
    description = 'Can`t find article',
    skills = 'Empty',
    link = 'Empty',
    linkG = 'Empty',
  } = item;
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <Project>
      <ModalProject
        handleCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
        title={title}
        image={image}
        alt={alt}
        description={description}
        skills={skills}
        link={link}
      />
      <ImageWraper onClick={() => handleOpenModal()}>
        <ImageComponent imgName={image} alt={alt} maxHeight="400px" />
      </ImageWraper>
      <ProjectCard>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription  onClick={() => handleOpenModal()}>{description}</ProjectDescription>
        <ProjectSubTitle>Skills:</ProjectSubTitle>
        <ProjectSkills>{skills}</ProjectSkills>
        <div>
          <ProjectSubTitle>Link:</ProjectSubTitle>
          <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
            {title}
            <FaExternalLinkAlt style={{ marginLeft: 8 }} />
          </ProjectLink>
        </div>
        <div>
          <ProjectSubTitle>Link:</ProjectSubTitle>
          <ProjectLink href={linkG} target="_blank" rel="noopener noreferrer">
            GitHUB&nbsp;link
            <FaExternalLinkAlt style={{ marginLeft: 8 }} />
          </ProjectLink>
        </div>
      </ProjectCard>
    </Project>
  );
};
