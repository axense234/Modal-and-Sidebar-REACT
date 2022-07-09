// React Icons
import { AiOutlineMenu } from "react-icons/ai";

export const Modal = ({
  navbarRef,
  showSidebar,
  showModal,
  handleModal,
  modalContent,
  handleCloseModal,
}) => {
  return (
    <>
      <button
        id='sidebar-button'
        onClick={() => navbarRef.current.classList.add("navbar-show")}
        ref={showSidebar}
      >
        <div id='button-div'>
          <AiOutlineMenu></AiOutlineMenu>
        </div>
      </button>
      <button
        id='showmodal-button'
        ref={showModal}
        onClick={() => {
          handleModal();
        }}
      >
        Show Modal
      </button>
      <div id='modal-content' ref={modalContent}>
        <button
          id='close-modal'
          onClick={() => {
            handleCloseModal();
          }}
        >
          x
        </button>
        <p>Modal Content</p>
      </div>
    </>
  );
};
