import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Navbar = ({about, experience, work, contact}) =>{
  return (
    <HeaderElement>
      <LogoContainer className="logo">
        <ImageElement src="/img/logo1.png" alt="logo" />
      </LogoContainer>
      <NavElement>
        <NavUlElements>
          <ListElement>
            <Link><Span>01.</Span>{about}</Link>
          </ListElement>
          <ListElement>
            <Link><Span>02.</Span>{experience}</Link>
          </ListElement>
          <ListElement>
            <Link><Span>03.</Span>{work}</Link>
          </ListElement>
          <ListElement>
            <Link><Span>04.</Span>{contact}</Link>
          </ListElement>
          <ListElement><Anchor href="#">Resume</Anchor></ListElement>
        </NavUlElements>
      </NavElement>
    </HeaderElement>
  )
}

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  color: #8892b0;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
`

const ImageElement = styled.img`
  max-width: 100%;
  background: none;
`

const NavElement = styled.nav`
  display: flex;
  align-items: center;
  width: 60%;
  justify-content: center;
`

const NavUlElements = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

const ListElement = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 500;
  width: 20%;
  cursor: pointer;

  &:hover{
    color: #cc2121;
  }
`
const Span = styled.span`
  color: #cc2121;
  margin-right: 5px;
`

const Anchor = styled.a`
  display: flex;
  border: 1px solid #cc2121;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  color: #cc2121;
  width: 80%;
`





export default Navbar