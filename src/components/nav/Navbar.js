import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdOutlineDarkMode, MdLightMode } from "react-icons/md";
import { navData } from "../../data/myData";

const Navbar = ({ about, services, experience, work, contact }) => {
  const [click, setClick] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <HeaderElement>
      <LogoContainer className="logo">
        <a href="/">
          <img src="/img/logo.png" alt="logo" />
        </a>
      </LogoContainer>
      <NavElement className={click ? "nav-options active" : "nav-options"}>
        <NavUlElements>
          {navData.map((item) => (
            <ListElement key={item.id}>
              <Link to={item.link} onClick={closeMobileMenu}>
                <Span>0{item.id}.</Span>
                {item.title}
              </Link>
            </ListElement>
          ))}
          <Anchor
            href="https://drive.google.com/file/d/15bSV1Sql2tmvXCfm6oOSFBYlOCLAtctd/view?usp=sharing"
            target="_blank"
          >
            Resume
          </Anchor>
        </NavUlElements>
      </NavElement>
      <ActionElement>
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
      </ActionElement>
      <div className="toggle mobile-menu" onClick={handleClick}>
        {click ? (
          <AiOutlineClose className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </div>
    </HeaderElement>
  );
};

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 50px 20px;
  color: #8892b0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
  }
  @media (min-width: 1024px) {
  }
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;

  img {
    margin-left: 80px;
  }

  @media screen and (max-width: 768px) {
    width: 50%;

    img {
      margin-left: 0px;
    }
  }
  @media (min-width: 1024px) {
  }
`;

const NavElement = styled.nav`
  display: flex;
  align-items: center;
  width: 40%;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 10px;
  }
  @media (min-width: 1024px) {
  }
`;

const NavUlElements = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const ListElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  width: 20%;
  cursor: pointer;

  &:hover {
    color: #cc2121;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.8rem;
    font-weight: 500;
    padding-top: 20px;
    width: 30%;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
  }
`;
const Span = styled.span`
  color: #cc2121;
  margin-right: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const ActionElement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 700;
  width: 20%;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 0.8rem;
    font-weight: 500;
    width: 30%;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
  }

  i {
    margin-left: 20px;
  }
`;

const Anchor = styled.a`
  display: flex;
  // border: 1px solid #cc2121;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #cc2121;
  width: 20%;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;

  &:hover {
    background: rgb(39, 39, 66);
  }

  @media screen and (max-width: 768px) {
    width: 40%;
    margin-top: 20px;
  }
  @media (min-width: 1024px) {
  }
`;

export default Navbar;
