// React
import { useEffect } from "react";
// React icons
import { FaHome, FaDiscord } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsFillCalendarDateFill,
  BsFacebook,
  BsSkype,
} from "react-icons/bs";
import { AiFillFolderOpen, AiFillTwitterCircle } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";
// Components
import Option from "./Option";

const Sidebar = ({ sidebarRef, setShowSidebar, show }) => {
  useSidebarTransititon(sidebarRef, show);

  return (
    <aside className='sidebar-container' ref={sidebarRef}>
      <div className='sidebar-container__title'>
        <h1>Axense's Team</h1>
        <button type='button' onClick={() => setShowSidebar(false)}>
          <IoCloseCircleSharp />
        </button>
      </div>
      <section className='sidebar-container__page-links'>
        <Option name='Home' icon={<FaHome />} />
        <Option name='Team' icon={<BsFillPeopleFill />} />
        <Option name='Projects' icon={<AiFillFolderOpen />} />
        <Option name='Calendar' icon={<BsFillCalendarDateFill />} />
      </section>
      <div className='sidebar-container__social-media'>
        <a href='https://web.facebook.com/'>
          <BsFacebook />
        </a>
        <a href='https://twitter.com/'>
          <AiFillTwitterCircle />
        </a>
        <a href='https://discord.com/'>
          <FaDiscord />
        </a>
        <a href='https://www.skype.com/ro/'>
          <BsSkype />
        </a>
      </div>
    </aside>
  );
};

const useSidebarTransititon = (sidebarRef, show) => {
  useEffect(() => {
    let timeout;
    const sidebar = sidebarRef.current;
    if (show) {
      sidebar.style.transform = "translateX(0)";
      sidebar.style.opacity = "1";
    } else {
      sidebar.style.transform = "translateX(-100%)";
      sidebar.style.opacity = "0";
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [show]);
};

export default Sidebar;
