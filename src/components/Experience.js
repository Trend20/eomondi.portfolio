import "react-tabs/style/react-tabs.css";
import styled from "styled-components";
import { motion } from "framer-motion";
import "../App.css";
import * as React from "react";
import { experienceData } from "../data/myData";

const Experience = () => {
  return (
    <>
      <ExperienceContainer className="experience" id="experience">
        <div class="head">
          <h1>Experience</h1>
          <p>
            <span></span>Where I've Worked
          </p>
        </div>
        {/* demo carousel */}
        <div class="experience-container">
          <div class="experience-card">
            <Tittle>Lead Frontend Engineer</Tittle>
            <Tittle className="company">Riverbank Solutions</Tittle>
            <JobDuration>April 2023 - Present</JobDuration>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Participating in the design and creation of scalable software.
              </p>
              <p>Writing clean, functional code on the front- and back-end.</p>
              <p>Testing and fixing bugs or other coding issues.</p>
            </div>
          </div>
          <div class="experience-card">
            <Tittle>FullStack Developer</Tittle>
            <Tittle className="company">Whrrl</Tittle>
            <JobDuration>June 2022 - May 2023</JobDuration>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Built the Mezy Dashboard using React.js for Frontend while
                consuming REST APIS using Axios from a SpringBoot Backend.
              </p>
              <p>
                Utilized the latest frontend libraries and built reusable
                components using React.js to speed up development time by 30%.
              </p>
              <p>
                Used Bootstrap for styling the Mezy Dashboard hence increasing
                the speed of the application and reducing the load time of the
                site by 50%.
              </p>
            </div>
          </div>
          <div class="experience-card">
            {/* <h3 class="job-title">Card 1</h3> */}
            <Tittle>Frontend Engineer</Tittle>
            <Tittle className="company">Mortgage Ezy</Tittle>
            <JobDuration>June 2021 - May 2022</JobDuration>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Collaborated, designed, and tested innovative applications, and
                supported those applications for our highly valued customers.
              </p>
              <p>
                Created and maintained the company website while documenting the
                different releases.
              </p>
              <p>
                Employed Design Thinking to create products that provided a
                great user experience along with high performance, security,
                quality, and stability.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <Tittle>Frontend React Developer</Tittle>
            <Tittle className="company">Jag Technology LLC</Tittle>
            <JobDuration>Oct 2020 - April 2021</JobDuration>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Collaborated, designed, and tested innovative applications, and
                supported those applications for our highly valued customers.
              </p>
              <p>
                Created and maintained the company website while documenting the
                different releases.
              </p>
              <p>
                Employed Design Thinking to create products that provided a
                great user experience along with high performance, security,
                quality, and stability.
              </p>
            </div>
          </div>
        </div>
      </ExperienceContainer>
    </>
  );
};

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 20px;
    margin-top: 50px;
  }
  @media (min-width: 1024px) {
  }
`;

const Tittle = styled.h3`
  display: flex;
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 5px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) {
  }
`;

const JobDuration = styled.p`
  display: flex;
  font-size: 0.8rem;
  line-height: 12px;
  margin-top: 10px;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  @media (min-width: 1024px) {
  }
`;

export default Experience;
