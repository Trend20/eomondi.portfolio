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
        <AboutAnchor href="mailto:enockomondi305@gmail.com">Let us Connect!</AboutAnchor>
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

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 50px 20px;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const AboutHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  @media screen and (max-width: 768px){
    width: 100%;
    display: flex;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const H1 = styled.h1`
  display: flex;
  font-size: 3.5rem;
  flex-direction: column;

  @media screen and (max-width: 768px){
    font-size: 2.5rem;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const Span = styled.span`
  display: flex;
  color: #cbd2e6;

  @media screen and (max-width: 768px){
    display: flex;
    color: #cbd2e6;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const AboutDescription = styled.div`
  display: flex;
  width: 80%;
  margin-top: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const DescriptionContent = styled.p`
  display: flex;
  font-size: 0.9rem;
  line-height: 1.6;

  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const AboutIcons = styled.div`
  margin-top: 10px;
  display: flex;
  width: 20%;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const Icon = styled.i`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover{
    color: #cc2121;
  }

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 0px;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const AboutButton = styled.div`
  display: flex;
  margin-top: 15px;

  @media screen and (max-width: 768px){
    width: 80%;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

const AboutAnchor = styled.a`
  margin-top: 20px;
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

  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 0.9rem !important;
  }
  @media (min-width: 1024px) {
    width: 100%;
  }
`

export default Start;