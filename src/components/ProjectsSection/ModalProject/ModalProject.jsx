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

ReactModal.setAppElement('#root');

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
      <ImageComponent maxImgWidth="auto" imageSrc={image} altText={alt} />
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
