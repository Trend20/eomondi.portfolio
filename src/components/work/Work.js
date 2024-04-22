import React, {useEffect, useState} from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { workData } from "../../data/myData";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Work = () => {
    const[showContent, setShowContent] = useState(null);
    const handleShowContent = (index) => {
        setShowContent(showContent === index ? null : index)
    }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="work" id="work">
      <div className="head" id="work-head">
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
        {workData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project_image" onMouseEnter={() => handleShowContent(index)} onMouseLeave={() => setShowContent(null)}>
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
              </a>
            </div>
              {
                  showContent === index && (
                      <div className="project_description">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="project_links">
                              <a
                                  href={project.projectLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  id="live"
                              ><FiExternalLink size={25} />
                              </a>
                              <a
                                  href={project.gitLink}
                                  target="_blank"
                                  rel="noreferrer"
                                  id="code"
                              >
                                  <FiGithub size={25} />
                              </a>
                          </div>
                          <div className="project_stack">
                            {
                              project.stack.map((item, index) => (
                                  <p key={item.id}>{item.name}</p>
                              ))
                            }
                          </div>
                      </div>
                  )
              }
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
