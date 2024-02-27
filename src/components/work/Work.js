import React, { useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { workData } from "../../data/myData";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="work" id="work">
      <div class="head" id="work-head">
        <h1 id="notable">Notable Projects</h1>
        <p>
          <span></span> Previous Projects
        </p>
      </div>
      <div
        className="projects_wrapper"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {workData.map((project) => (
          <div className="project">
            <div className="project_image">
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
              </a>
            </div>
            <div className="project_description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project_links">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  id="live"
                >
                  Live preview <FiExternalLink />
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  id="code"
                >
                  Source Code <FiGithub />
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p style={{ background: "transparent" }}>Status:</p>
                <p style={{ fontWeight: "bold", background: "transparent" }}>
                  {project.status}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="show_more_button">
        <a href="https://github.com/Trend20" target="_blank" rel="noreferrer">
          Show More
        </a>
      </button>
    </div>
  );
};

export default Work;
