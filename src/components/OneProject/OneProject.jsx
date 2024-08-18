import { FaExternalLinkAlt } from "react-icons/fa";
import { ModalProject } from "../ModalProject/ModalProject";
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

//  id,  image = 'placeholder', alt = 'Can`t find image', description = 'Can`t find artikle', skills = 'Empty', link = 'Empty',

export const OneProject = ({
  title = 'Unknown',
  image = 'placeholder',
  alt = 'Can`t find image',
  description = 'Can`t find article',
  skills = 'Empty',
  link = 'Empty',
}) => {

  const clickFu = (title,image,description) => {
    console.log('first');
    console.log(title,image,description);
    <ModalProject title={title} image={image} description={description}/>;
  }

  return (
    <Project>
      <ImageWraper onClick={()=>clickFu(title,image,description)}>
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
