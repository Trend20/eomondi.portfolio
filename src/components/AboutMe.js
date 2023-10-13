import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const technologies = [
  "Javascript",
  "Typescript",
  "React",
  "Angular",
  "Node.js",
  "MongoDB",
  "Bootstrap",
  "Sass",
  "Git",
  "Next.js",
];

const AboutMe = () => {
  return (
    <AboutWrapper className="about-me" id="about">
      <div class="head">
        <h1>About Me</h1>
        <p>
          <span></span> About
        </p>
      </div>
      <Description className="description">
        <AboutMeContent className="contents">
          <ContentParagraph>
            Hello! My name is Enock and I enjoy creating things that live on the
            internet. My interest in web development started back in 2019 when I
            decided to try and edit a web template but it turned to be my first
            web project and it taught me a lot about HTML & CSS!
          </ContentParagraph>
          <ContentParagraph>
            My main focus these days is building accessible, inclusive products
            and digital experiences for a variety of clients.
          </ContentParagraph>
          <ContentParagraph>
            Here are a few technologies I’ve been working with recently:
          </ContentParagraph>
        </AboutMeContent>
        <TechStackContainer className="languages">
          {technologies.map((tech, index) => {
            return <List key={index}>{tech}</List>;
          })}
        </TechStackContainer>
      </Description>
    </AboutWrapper>
  );
};

const AboutWrapper = styled(motion.div)`
  display: flex;
  padding: 100px;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #8892b0;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    flex-direction: column;
    justify-content: center;
  }
  @media (min-width: 1024px) {
  }
`;

const Description = styled.div`
  display: flex;
  width: 70%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
  }
  @media (min-width: 1024px) {
  }
`;

const AboutMeContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 40%;
  padding: 20px;
  height: 500px;
  background-color: #112240;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const ContentParagraph = styled.p`
  display: flex;
  padding-top: 20px;
  width: 100%;
  line-height: 1.6;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const TechStackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 40%;
  height: 500px;
  margin-top: 30px;
  padding: 20px;
  background-color: #112240;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

const List = styled.li`
  &::before {
    content: "▹";
    line-height: 12px;
    margin-right: 20px;
    color: #cc2121;
  }
  list-style: none;
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding-top: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
  }
`;

export default AboutMe;
