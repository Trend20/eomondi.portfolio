import React from 'react'
import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Start = () =>{
  return (
    <AboutContainer id='intro' data-aos="fade-down" data-aos-duration="2000">
      <AboutHeading>
        <H1>
          <Span>Enock Omondi</Span>
          I build interactive web stuff.
        </H1>
      </AboutHeading>
      <AboutDescription>
        <DescriptionContent>
          I'm a Frontend Web Developer based in Nairobi who converts complex UI designs to beautiful websites 
          while helping Professionals and Businesses to build their websites using technologies like HTML&CSS, 
          JavaScript, Angular, React, Nodejs, Express, and MongoDB.
        </DescriptionContent>
      </AboutDescription>
      <AboutIcons>
        <Icon><FiGithub /></Icon>
        <Icon><FiLinkedin /></Icon>
        <Icon><FiTwitter /></Icon>
      </AboutIcons>
      <AboutButton>
        <AboutAnchor href="#">Let us Connect!</AboutAnchor>
      </AboutButton>
    </AboutContainer>
  )
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 50px 100px; 
  color: #8892b0;
`

const AboutHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

`

const H1 = styled.h1`
  display: flex;
  font-size: 3.5rem;
  flex-direction: column;
`

const Span = styled.span`
  display: flex;
  color: #cbd2e6;
`

const AboutDescription = styled.div`
  display: flex;
  width: 80%;
  margin-top: 10px;
`

const DescriptionContent = styled.p`
  display: flex;
  font-size: 0.9rem;
  line-height: 1.6;
`

const AboutIcons = styled.div`
  margin-top: 10px;
  display: flex;
  width: 20%;
  align-items: center;
`

const Icon = styled.i`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover{
    color: #cc2121;
  }
`

const AboutButton = styled.div`
  display: flex;
  margin-top: 15px;
`

const AboutAnchor = styled.a`
  margin-top: 20px;
  width: 30%;
  padding: 20px;
  border: 1px solid #cc2121;
  border-radius: 5px;
  outline: none;
  background: transparent;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #cc2121;
  font-weight: 500;
  cursor: pointer;

  &:hover{
    background: rgb(39, 39, 66);
  }
`

export default Start;