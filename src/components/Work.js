import React from "react";
import styled from "styled-components";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { workData } from "../data/myData";

const Work = () => {
  return (
    <WorkContainer className="work" id="work">
      <div class="head">
        <h1 id="notable">Notable Projects</h1>
        <p>
          <span></span>Some Things I’ve Built
        </p>
      </div>
      <ProjectsWrapper>
        {workData.map((project) => (
          <Project>
            <ProjectImage>
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
              </a>
            </ProjectImage>
            <ProjectDescription>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {/* <Stack>
                <li>MongoDB</li>
                <li>ExpressJS</li>
                <li>React</li>
                <li>NodeJS</li>
              </Stack> */}
              <ProjectLinks>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  id="live"
                >
                  Live preview <FiExternalLink />
                </a>
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  id="code"
                >
                  Source Code <FiGithub />
                </a>
              </ProjectLinks>
            </ProjectDescription>
          </Project>
        ))}
      </ProjectsWrapper>

      <ShowMoreButton>
        <a href="https://github.com/Trend20" target="_blank" rel="noreferrer">
          Show More
        </a>
      </ShowMoreButton>
    </WorkContainer>
  );
};

const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: auto;
  margin-bottom: 50px;
  color: #8892b0;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 40px;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 50px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Project = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border: 1px solid #cc2121;
  border-radius: 10px;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    width: 100%;
  }
  img {
    display: flex;
    max-width: 100%;
    height: auto;
    background-color: #cc2121;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const ProjectDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h3 {
    color: #cbd2e6;
    font-size: 1.2rem;
    margin-top: 20px;
  }

  p {
    font-size: 0.8rem;
    background: #112240;
    margin-top: 20px;
    line-height: 1.8;
    padding: 10px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: auto;
    text-align: left;

    h3 {
      color: #cbd2e6;
      font-size: 1.2rem;
      padding-bottom: 10px;
    }

    p {
      font-size: 0.7rem;
    }
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  a {
    color: #8892b0;

    &:hover {
      color: #cc2121;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

const ShowMoreButton = styled.button`
  display: flex;
  width: 10%;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  background: transparent;
  outline: none;
  border: 1px solid #cc2121;
  border-radius: 5px;

  a {
    display: flex;
    text-decoration: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
    color: #cc2121;
    font-weight: 700;
    font-size: 1rem;
  }

  &:hover {
    background: rgb(39, 39, 66);
  }

  @media screen and (max-width: 768px) {
    width: 50%;
  }
`;

export default Work;
