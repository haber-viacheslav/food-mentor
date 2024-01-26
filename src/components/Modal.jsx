import { createPortal } from 'react-dom';
import { Overlay, ModalBody, BtnCloseModal } from '../styles/Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClick, children }) => {
  useEffect(() => {
    const handleEscDown = e => {
      if (e.code === 'Escape') {
        onClick();
      }
    };
    window.addEventListener('keydown', handleEscDown);
    return () => {
      window.removeEventListener('keydown', handleEscDown);
    };
  }, [onClick]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };
  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalBody>
        <BtnCloseModal onClick={onClick}>x</BtnCloseModal>
        {children}
      </ModalBody>
    </Overlay>,
    modalRoot
  );
};
