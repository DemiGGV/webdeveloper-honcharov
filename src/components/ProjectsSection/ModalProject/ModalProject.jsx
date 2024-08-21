import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { FaExternalLinkAlt } from 'react-icons/fa';

import {
  ImageWraper,
  ProjectCard,
  ProjectTitle,
  ProjectDescription,
  ProjectSubTitle,
  ProjectLink,
} from './ModalProject.styled';
import { ImageComponent } from '../../Utils/ImageComponent/ImageComponent';

export const ModalProject = ({
  handleCloseModal,
  modalIsOpen,
  title,
  image,
  alt,
  description,
  link,
}) => {

  return (
    <ReactModal
      contentLabel="Modal window"
      isOpen={modalIsOpen}
      onRequestClose={() => {
        handleCloseModal({});
      }}
      className="ModalContent"
      overlayClassName="ModalOverlay"
      onAfterOpen={() => disableBodyScroll(document)}
      onAfterClose={() => enableBodyScroll(document)}
    >
      <ImageWraper>
        <ImageComponent imgName={image} alt={alt} maxHeight="100%" height="100%"/>
      </ImageWraper>
      <ProjectCard>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectSubTitle href={link} target="_blank" rel="noopener noreferrer">
          Link:
          <ProjectLink>
            {title}
            <FaExternalLinkAlt />
          </ProjectLink>
        </ProjectSubTitle>
      </ProjectCard>
    </ReactModal>
  );
};
