import { useState } from 'react';
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

export const OneProject = ({
  id,
  title = 'Unknown',
  image = 'placeholder',
  alt = 'Can`t find image',
  description = 'Can`t find article',
  skills = 'Empty',
  link = 'Empty',
}) => {
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
        id={id}
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
        <ImageComponent imgName={image} alt={alt} maxHeight="400" />
      </ImageWraper>
      <ProjectCard>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectSubTitle>Skills:</ProjectSubTitle>
        <ProjectSkills>{skills}</ProjectSkills>
        <ProjectSubTitle>Link:</ProjectSubTitle>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
          {title}
          <FaExternalLinkAlt />
        </ProjectLink>
      </ProjectCard>
    </Project>
  );
};
