import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { navData } from "../../data/myData";
import "./Nav.css";
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const switchTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <header className="header_element">
      <div className="logo-container">
        <a href="/">
          <img src={logoImg} alt="logo-img" />
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
        </ul>
      </nav>
      <div className="action_element">
        <Link
          to=""
          className={`${darkMode ? "btn-dark" : "btn-light"}`}
          onClick={switchTheme}
        >
          {darkMode ? (
            <MdOutlineDarkMode size={40} fill="#cc2121" />
          ) : (
            <MdLightMode size={40} fill="#cc2121" />
          )}
        </Link>
      </div>
      <div className="toggle mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" fill="#cc2121" />
        ) : (
          <FaBars className="menu-icon" fill="#cc2121" />
        )}
      </div>
    </header>
  );
};

export default Navbar;
