import ReactModal from 'react-modal';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    zIndex: 1200,
  },
  content: {
    maxWidth: 'calc(100vw - 48px)',
    maxHeight: 'calc(100vh - 24px)',
    padding: 5,
    border: 'none',
    position: 'static',
    borderRadius: 0,
    overflow: 'hidden',
  },
};

ReactModal.setAppElement('#root');

export const ModalProject = (
  id,
  handleCloseModal,
  modalIsOpen,
  title,
  image,
  alt,
  description,
  skills,
  link,
) => {
  console.log(
    id,
    handleCloseModal,
    modalIsOpen,
    title,
    image,
    alt,
    description,
    skills,
    link,
  );

  return (
    <>
      <ReactModal
      key={id}
        isOpen={modalIsOpen}
        contentLabel="Modal window"
        onRequestClose={() => {
          handleCloseModal({});
        }}
        onAfterOpen={() => disableBodyScroll(document)}
        onAfterClose={() => enableBodyScroll(document)}
        style={customStyles}
      >
        <div>ModalProject</div>
        <div>
          {title}
          {image}
          {description}
        </div>
      </ReactModal>
    </>
  );
};
