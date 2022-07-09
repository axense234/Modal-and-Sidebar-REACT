// Option
import { Option } from "./Option";
// React icons
import { FaHome, FaDiscord } from "react-icons/fa";
import {
  BsFillPeopleFill,
  BsFillCalendarDateFill,
  BsFacebook,
  BsSkype,
} from "react-icons/bs";
import { AiFillFolderOpen, AiFillTwitterCircle } from "react-icons/ai";

export const Sidebar = ({ navbarRef, closeNavbar }) => {
  return (
    <article ref={navbarRef}>
      <div id='flex-container'>
        <h1>Axense's Team</h1>
        <button
          id='close-navbar'
          onClick={() => navbarRef.current.classList.remove("navbar-show")}
          ref={closeNavbar}
        >
          x
        </button>
      </div>
      <section>
        <Option name='Home' icon={<FaHome></FaHome>}></Option>
        <Option
          name='Team'
          icon={<BsFillPeopleFill></BsFillPeopleFill>}
        ></Option>
        <Option
          name='Projects'
          icon={<AiFillFolderOpen></AiFillFolderOpen>}
        ></Option>
        <Option
          name='Calendar'
          icon={<BsFillCalendarDateFill></BsFillCalendarDateFill>}
        ></Option>
      </section>
      <div id='icon-container'>
        {/* Icons */}
        {/* Facebook */}
        <a href='https://web.facebook.com/'>
          <BsFacebook></BsFacebook>
        </a>
        {/* Twitter */}
        <a href='https://twitter.com/'>
          <AiFillTwitterCircle></AiFillTwitterCircle>
        </a>
        {/* Discord */}
        <a href='https://discord.com/'>
          <FaDiscord></FaDiscord>
        </a>
        {/* Skype */}
        <a href='https://www.skype.com/ro/'>
          <BsSkype></BsSkype>
        </a>
      </div>
      {/* Main content */}
    </article>
  );
};
