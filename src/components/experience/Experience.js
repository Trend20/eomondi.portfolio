import "react-tabs/style/react-tabs.css";
import * as React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div class="head" id="expe-head">
          <h1>Experience</h1>
          <p>
            <span></span>Where I've Worked
          </p>
        </div>
        {/* demo carousel */}
        <div class="experience-container">
          <div class="experience-card">
            <h3 className="j_title">Software Engineer</h3>
            <h1 className="company">Riverbank Solutions</h1>
            <p className="j_duration">April 2023 - Present</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Spearheaded the development of Zed Payments portal's frontend,
                employing React to enhance visual appeal, foster modular code,
                and accelerate performance by 40%.
              </p>
              <p>
                Executed comprehensive end-to-end testing and debugging using
                Cypress and DevTools, meticulously identifying and resolving
                frontend issues to guarantee a flawlessly functioning user
                experience.
              </p>
              <p>
                Proactively contributed to the improvement of development
                processes, introducing and implementing best practices that
                resulted in heightened efficiency and code quality.
              </p>
            </div>
          </div>
          <div class="experience-card">
            <h3 className="j_title">FullStack Developer</h3>
            <h1 className="company">Whrrl</h1>
            <p className="j_duration">June 2022 - May 2023</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Engineered and tested RESTful APIs to dynamically serve data to
                an Angular front-end, adeptly handling over 200,000 concurrent
                users, ensuring robust performance and responsiveness.
              </p>
              <p>
                Designed and implemented an aesthetically appealing front end
                for the Bru Finance app using React, resulting in a 30% increase
                in speed and a more modular codebase, thereby enhancing overall
                user satisfaction.
              </p>
              <p>
                Elevated code quality and developer contribution by 15% through
                rigorous code reviews and testing sessions for various features
                on the BruFinance web app.
              </p>
            </div>
          </div>
          <div class="experience-card">
            <h3 className="j_title">Frontend Engineer</h3>
            <h1 className="company">Mortgage Ezy</h1>
            <p className="j_duration">June 2021 - May 2022</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Implemented a robust testing strategy by writing unit tests for
                various React components, contributing to enhanced application
                performance and reducing the number of bugs reported during
                development by an impressive 12%.
              </p>
              <p>
                Played a pivotal role in the cross-collaboration efforts on the
                Deb project, accelerating the development process and ensuring
                the timely delivery of the project.
              </p>
              <p>
                Collaborated closely with the product manager to successfully
                re-architect a multi-page dashboard into a single-page web app
                resulting in a remarkable 50% improvement in user experience.
              </p>
            </div>
          </div>
          <div className="experience-card">
            <h3 className="j_title">Frontend Developer</h3>
            <h1 className="company">Jag Technology LLC</h1>
            <p className="j_duration">Oct 2020 - April 2021</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Translated simple designs into dynamic website layouts using
                React.js, HTML, CSS, and JavaScript best practices. This
                approach ensured the creation of visually engaging and
                user-friendly interfaces.
              </p>
              <p>
                Played a pivotal role in maintaining, expanding, and scaling the
                company's official website, contributing to its growth and
                ensuring its alignment with evolving business needs and
                objectives.
              </p>
              <p>
                Proactively identified and addressed bugs in existing websites,
                implementing enhancements that significantly improved web
                functionality and speed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
