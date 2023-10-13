import React from "react";
import styled from "styled-components";
import "animate.css";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

const Start = () => {
  return (
    <AboutContainer id="intro">
      <AboutImage className="about-img">
        <Img src="/img/profile.png" alt="profile-pic" />
      </AboutImage>
      <AboutHeading>
        <H1>
          <Span>Enock Omondi</Span>I build interactive web stuff.
        </H1>
      </AboutHeading>
      <AboutDescription>
        <DescriptionContent>
          <p>
            I am a highly collaborative team player who thrives in dynamic and
            fast-paced environments. My excellent communication and
            problem-solving skills allow me to work effectively with
            cross-functional teams to deliver solutions that exceed
            expectations.
          </p>
        </DescriptionContent>
      </AboutDescription>
      <AboutIcons>
        <Icon>
          <a href="https://github.com/Trend20" target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://www.linkedin.com/in/enock-omondi/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin />
          </a>
        </Icon>
        <Icon>
          <a
            href="https://twitter.com/dev_enock"
            target="_blank"
            rel="noreferrer"
          >
            <FiTwitter />
          </a>
        </Icon>
      </AboutIcons>
      <AboutButton>
        <AboutAnchor href="mailto:enockomondi305@gmail.com">
          Let us Connect!
        </AboutAnchor>
      </AboutButton>
    </AboutContainer>
  );
};

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px;
  color: #8892b0;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin-top: 0px;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
  }
  @media (min-width: 1024px) {
  }
`;

const H1 = styled.h1`
  display: flex;
  font-size: 3.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    width: 100%;
  }
  @media (min-width: 1024px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const Span = styled.span`
  display: flex;
  color: #cbd2e6;

  &hover {
    --animate-duration: 2s;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    color: #cbd2e6;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutDescription = styled.div`
  display: flex;
  width: 40%;
  margin-top: 10px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const DescriptionContent = styled.p`
  display: flex;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 1.2px;
  width: 100%;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  p {
    margin-top: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutIcons = styled.div`
  margin-top: 10px;
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

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
`;

const AboutButton = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutAnchor = styled.a`
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
  width: 10%;

  &:hover {
    background: rgb(39, 39, 66);
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutImage = styled.div`
  display: flex;
  width: 30%;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 10px;
    justify-content: center;
    display: flex;
    align-items: center;
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const Img = styled.img`
  max-width: 50%;
  height: 50%;
  border-radius: 50%;
  border: none;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1024px) {
  }
`;

export default Start;
