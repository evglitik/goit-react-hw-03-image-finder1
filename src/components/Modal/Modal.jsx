import { ModalContainer, Overlay } from './Modal.styled';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  onClosseModal: PropTypes.func.isRequired,
};
