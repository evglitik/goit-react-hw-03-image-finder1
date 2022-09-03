import { ModalContainer, Overlay } from './Modal.styled';

export const Modal = ({ img, onClosseModal }) => {
  return (
    <Overlay
      onClick={e => {
        if (e.currentTarget === e.target) {
          onClosseModal();
        }
      }}
    >
      <ModalContainer>
        <img src={img} alt="" />
      </ModalContainer>
    </Overlay>
  );
};
