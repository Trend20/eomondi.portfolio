import "react-tabs/style/react-tabs.css";
import React, { useEffect } from "react";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="experience" id="experience">
        <div className="head" id="expe-head">
          <h1>Experience</h1>
          <p>
            <span></span>Where I've Worked
          </p>
        </div>
        {/* demo carousel */}
        <div
          className="experience-container"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          <div className="experience-card">
            <h3 className="j_title">Software Engineer</h3>
            <h1 className="company">Riverbank Solutions</h1>
            <p className="j_duration">April 2023 - Jan 2024</p>
            <div className="job-bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Spearheaded the development of Zed Payments portal's frontend, employing React to enhance visual appeal, foster modular code,and accelerate performance by 40%.
              </p>
              <p>
                Executed comprehensive end-to-end testing and debugging using Cypress and DevTools, identifying and resolving frontend issues hence improving user experience by 50%.
              </p>
              <p>
                Contributed to the improvement of development processes by introducing and implementing best practices that resulted in a 25% increase in efficiency and code quality.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <h3 className="j_title">FullStack Developer</h3>
            <h1 className="company">Whrrl</h1>
            <p className="j_duration">June 2022 - May 2023</p>
            <div className="job-bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Engineered and tested RESTful APIs to dynamically serve data to an Angular front-end handling over 20,000 concurrent users, ensuring robust performance and responsiveness at scale.
              </p>
              <p>
                Designed an appealing front end for the Bru Finance app using React, resulting in a notable 30% increase in speed and an enhanced user satisfaction.
              </p>
              <p>
                Elevated code quality and developer contribution by 70% through rigorous code reviews and testing sessions.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <h3 className="j_title">Frontend Engineer</h3>
            <h1 className="company">Mortgage Ezy</h1>
            <p className="j_duration">June 2021 - May 2022</p>
            <div className="job-bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Implemented a robust testing strategy by writing unit tests for various React components, contributing to enhanced application performance by an impressive 50%.
              </p>
              <p>
                Collaborated on the Deb project, accelerating the development process and increasing the project delivery rate by 45%.
              </p>
              <p>
                Re-architected a multi-page dashboard into a single-page web app, resulting in a remarkable 50% improvement in user experience.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <h3 className="j_title">Frontend Developer</h3>
            <h1 className="company">Jag Technology LLC</h1>
            <p className="j_duration">Oct 2020 - April 2021</p>
            <div className="job-bar">
              <div className="emptybar"></div>
              <div className="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Developed and implemented highly responsive user-interface components using react concepts improving the accessibility by 30%.
              </p>
              <p>
                Monitored and optimized front-end performance by streamlining CSS code leading to a 40% reduction in load time and a 25% increase in overall performance.
              </p>
              <p>
                Identified and resolved 30+ bugs from existing websites while implementing enhancements that resulted in a 50% improvement in web functionality and speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
