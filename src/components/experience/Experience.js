import "react-tabs/style/react-tabs.css";
import * as React from "react";
import "./experience.css";

const Experience = () => {
  return (
    <>
      <div className="experience" id="experience">
        <div class="head">
          <h1>Experience</h1>
          <p>
            <span></span>Where I've Worked
          </p>
        </div>
        {/* demo carousel */}
        <div class="experience-container">
          <div class="experience-card">
            <h3 className="j_title">Lead Frontend Engineer</h3>
            <h1 className="company">Riverbank Solutions</h1>
            <p className="j_duration">April 2023 - Present</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Collaborate effectively in an agile manner with cross-functional
                teams on Github and Skype, including backend developers,
                designers, and product managers, to deliver cohesive solutions.
              </p>
              <p>
                Conduct thorough end-to-end testing and debugging using Cypress
                and DevTools to identify and resolve frontend issues, ensuring a
                bug-free user experience.
              </p>
              <p>
                Communicate with the internal teams and stakeholders through
                Microsoft Teams and Skype, working to determine solutions for
                the best user experience.
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
                Utilized the latest frontend libraries and built reusable
                components using React.js to speed up development time by 30%.
              </p>
              <p>
                Built the Mezy Dashboard using React.js for Frontend while
                consuming REST APIS using Axios from a SpringBoot Backend.
              </p>
              <p>
                Used Bootstrap for styling the Mezy Dashboard hence increasing
                the speed of the application and reducing the load time of the
                site by 50%.
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
                Built RESTful APIs using NodeJS and ExpressJS that serve data to
                a React front-end based on dynamically chosen user inputs that
                handle over 200,000 concurrent users.
              </p>
              <p>
                Employed Design Thinking to create products that provide a great
                user experience along with high performance, security, quality,
                and stability.
              </p>
              <p>
                Re-built the front end of our Bru Finance web app through an
                appealing visual design using React, resulting in a more modular
                code and increasing speed by 30%.
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
                Developed and implemented highly responsive user interface
                components using react concepts.
              </p>
              <p>
                Monitored and improved front-end performance by minimizing the
                CSS code and using libraries like Materialize and Bootstrap.
              </p>
              <p>
                Fixed bugs from existing websites and implemented enhancements
                that significantly improved web functionality and speed.
              </p>
            </div>
          </div>

          <div class="experience-card">
            <h3 className="j_title">Frontend Engineer</h3>
            <h3 className="company">MTAANI-TECH HUB LIMITED</h3>
            <p className="j_duration">Feb 2019 - May 2021</p>
            <div class="job-bar">
              <div class="emptybar"></div>
              <div class="filledbar"></div>
            </div>
            <div className="roles">
              <p>
                Integrated third-party APIs to enhance application functionality
                and data retrieval, enabling seamless integration of external
                services.
              </p>
              <p>
                Maintained high code quality standards through code reviews and
                adhered to best practices, ensuring maintainability and
                scalability.
              </p>
              <p>
                Designed and optimized interfaces for mobile devices, improving
                accessibility and user engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
