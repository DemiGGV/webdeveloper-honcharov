import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { IoCloseOutline, IoOpenOutline } from 'react-icons/io5';

import {
  ButtonCloseWrapper,
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
      <ButtonCloseWrapper onClick={() => handleCloseModal()}>
        <IoCloseOutline style={{ height: 32, width: 32 }} />
      </ButtonCloseWrapper>
      <ImageWraper>
        <ImageComponent
          imgName={image}
          alt={alt}
          maxHeight="100%"
          height="100%"
        />
      </ImageWraper>
      <ProjectCard>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <ProjectSubTitle href={link} target="_blank" rel="noopener noreferrer">
          Link:
          <ProjectLink>
            {title}
            <IoOpenOutline />
          </ProjectLink>
        </ProjectSubTitle>
      </ProjectCard>
    </ReactModal>
  );
};
