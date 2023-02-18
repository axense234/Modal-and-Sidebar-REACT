// React
import { useRef, useState } from "react";
// React Icons
import { AiOutlineMenu } from "react-icons/ai";
// Components
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);

  return (
    <main className='main-content-container'>
      {!showSidebar && <AiOutlineMenu onClick={() => setShowSidebar(true)} />}
      <Sidebar
        sidebarRef={sidebarRef}
        setShowSidebar={setShowSidebar}
        show={showSidebar}
      />
      {!showModal && (
        <button type='button' onClick={() => setShowModal(true)}>
          Show Modal
        </button>
      )}
      <Modal modalRef={modalRef} setShowModal={setShowModal} show={showModal} />
    </main>
  );
};

export default Main;
