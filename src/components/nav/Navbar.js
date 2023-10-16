import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { navData } from "../../data/myData";
import "./Nav.css";

const Navbar = ({ about, services, experience, work, contact }) => {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <header className="header_element">
      <div className="logo">
        <a href="/">
          <img src="/img/logo.png" alt="logo" />
        </a>
      </div>
      <nav
        className={click ? "nav-options active" : "nav-options"}
        id="nav_element"
      >
        <ul className="ul_elements">
          {navData.map((item) => (
            <li className="list_element" key={item.id}>
              <Link to={item.link} onClick={closeMobileMenu}>
                <span>0{item.id}.</span>
                {item.title}
              </Link>
            </li>
          ))}
          <a
            className="anchor"
            href="https://drive.google.com/file/d/15bSV1Sql2tmvXCfm6oOSFBYlOCLAtctd/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </ul>
      </nav>
      <div className="action_element">
        <i>
          {darkMode ? (
            <MdLightMode
              size={40}
              fill="#cc2121"
              onClick={() => setDarkMode(!darkMode)}
            />
          ) : (
            <MdOutlineDarkMode
              size={40}
              fill="#cc2121"
              onClick={() => setDarkMode(!darkMode)}
            />
          )}
        </i>
      </div>
      <div className="toggle mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
