// React
import { useEffect } from "react";
// React Icons
import { IoCloseCircleSharp } from "react-icons/io5";

const Modal = ({ modalRef, setShowModal, show }) => {
  useEffect(() => {
    let timeout;
    const modal = modalRef.current;
    if (show) {
      modal.style.display = "flex";
      timeout = setTimeout(() => {
        modal.style.transform = "scale(1)";
        modal.style.opacity = "1";
      }, 10);
    } else {
      modal.style.transform = "scale(0)";
      modal.style.opacity = "0";
      timeout = setTimeout(() => {
        modal.style.display = "none";
      }, 10);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);

  return (
    <div className='modal-container' ref={modalRef}>
      <div className='modal-container__content'>
        <IoCloseCircleSharp onClick={() => setShowModal(false)} />
        <h2>Modal</h2>
        <p>Modal content blah blah blah.</p>
      </div>
    </div>
  );
};

export default Modal;
