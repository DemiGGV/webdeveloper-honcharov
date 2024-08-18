import { FaExternalLinkAlt } from "react-icons/fa";
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
import { ImageComponent } from '../ImageComponent/ImageComponent';

export const OneProject = ({ handleModalOpen,
  title = 'Unknown',
  image = 'placeholder',
  alt = 'Can`t find image',
  description = 'Can`t find article',
  skills = 'Empty',
  link = 'Empty',
}) => {

  return (
    <Project>
      <ImageWraper onClick={()=>handleModalOpen(title,image,description)}>
        <ImageComponent imgName={image} alt={alt} maxHeight="340" />
      </ImageWraper>
      <ProjectCard>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectSubTitle>Skills:</ProjectSubTitle>
        <ProjectSkills>{skills}</ProjectSkills>
        <ProjectSubTitle>Link:</ProjectSubTitle>
        <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
        {title}<FaExternalLinkAlt />
        </ProjectLink>
      </ProjectCard>
    </Project>
  );
};
