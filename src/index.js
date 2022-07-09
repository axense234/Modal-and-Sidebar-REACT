import React, { useRef } from "react";
import ReactDOM from "react-dom";
// CSS
import "./style.css";
// Sidebar
import { Sidebar } from "./Sidebar";
import { Modal } from "./Modal";

const App = () => {
  const navbarRef = useRef(null);
  const modalContent = useRef(null);
  const sectionContent = useRef(null);
  const showModal = useRef(null);
  const closeNavbar = useRef(null);
  const showSidebar = useRef(null);

  console.log(showSidebar.current);

  const handleModal = () => {
    modalContent.current.style.visibility = "visible";
    navbarRef.current.style.filter = "brightness(0.5)";
    sectionContent.current.style.backgroundColor = "grey";
    showModal.current.style.filter = "brightness(0.5)";
    closeNavbar.current.disabled = true;
    showSidebar.current.disabled = true;
    showSidebar.current.style.filter = "brightness(0.5)";
  };

  const handleCloseModal = () => {
    modalContent.current.style.visibility = "hidden";
    navbarRef.current.style.filter = "brightness(1)";
    sectionContent.current.style.backgroundColor = "white";
    showModal.current.style.filter = "brightness(1)";
    closeNavbar.current.disabled = false;
    showSidebar.current.disabled = false;
    showSidebar.current.style.filter = "brightness(1)";
  };
  return (
    <>
      {/* Sidebar content */}
      <section ref={sectionContent}>
        <Sidebar navbarRef={navbarRef} closeNavbar={closeNavbar}></Sidebar>
        <Modal
          navbarRef={navbarRef}
          showSidebar={showSidebar}
          showModal={showModal}
          modalContent={modalContent}
          handleModal={handleModal}
          handleCloseModal={handleCloseModal}
        ></Modal>
      </section>
    </>
  );
};

ReactDOM.render(<App></App>, document.getElementById("root"));
