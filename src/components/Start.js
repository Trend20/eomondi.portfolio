import React from 'react'
import styled from 'styled-components'
import 'animate.css';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'

const Start = () =>{
  return (
    <AboutContainer id='intro'>
      {/* data-aos="fade-down" data-aos-duration="2000" */}
      <AboutHeading>
        <H1>
          <Span className='animate__animated animate__shakeY'>Enock Omondi</Span>
          I build interactive web stuff.
        </H1>
      </AboutHeading>
      <AboutDescription>
        <DescriptionContent>
        I am a Software Developer based in Nairobi who converts complex problems to beautiful Web Solutions while helping Professionals and Businesses to build their Web Apps using 
        technologies like HTML&CSS, JavaScript, Typescript, Angular, React, Nodejs, Express, and MongoDB.
        </DescriptionContent>
      </AboutDescription>
      <AboutIcons>
        <Icon><a href="https://github.com/Trend20" target="_blank"><FiGithub /></a></Icon>
        <Icon><a href="https://www.linkedin.com/in/enock-omondi-278554174/" target="_blank"><FiLinkedin /></a></Icon>
        <Icon><a href="https://twitter.com/dev_enock" target="_blank"><FiTwitter /></a></Icon>
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
  padding: 20px 100px; 
  color: #8892b0;
  margin-top: 50px;

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 50px 20px;
    margin-top: 30px;
  }
  @media (min-width: 1024px) {
    
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
    
  }
`

const Span = styled.span`
  display: flex;
  color: #cbd2e6;

  &hover{
      --animate-duration: 2s;
  }
  @media screen and (max-width: 768px){
    display: flex;
    color: #cbd2e6;
  }
  @media (min-width: 1024px) {
    
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
    
  }
`

const AboutIcons = styled.div`
  margin-top: 10px;
  display: flex;
  width: 30%;
  align-items: center;

  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media (min-width: 1024px) {
    
  }
`

const Icon = styled.i`
  display: flex;
  padding: 10px;
  cursor: pointer;

  a{
    padding: 10px;
    color: #8892b0;
  
    &:hover{
      color: #cc2121;
    }

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 0px;
  }
  @media (min-width: 1024px) {
   
  }
`

const AboutButton = styled.div`
  display: flex;
  margin-top: 15px;
  width: 100;

  @media screen and (max-width: 768px){
    width: 80%;
  }
  @media (min-width: 1024px) {
    
  }
`

const AboutAnchor = styled.a`
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #cc2121;
  border-radius: 5px;
  outline: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #cc2121;
  font-weight: 500;
  cursor: pointer;
  width: 20%;

  &:hover{
    background: rgb(39, 39, 66);
  }

  @media screen and (max-width: 768px){
    width: 100%;
  }
  @media (min-width: 1024px) {
    
  }
`

export default Start;