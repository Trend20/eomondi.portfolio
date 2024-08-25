import React, { useEffect } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { MdLiveTv } from "react-icons/md";
import { workData } from "../../data/myData";
import "./Work.css";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionHeader from "../../common/SectionHeader";
import Button from "../../common/Button";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="work" id="work">
      <SectionHeader heading="Projects" overlayText="Previous Projects" />
      <div
        className="projects_wrapper"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {workData.map((project, index) => (
          <div className="project" key={index}>
            <div className="project_image">
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <img src={project.img} alt={project.title} />
              </a>
            </div>
            <div className="project_description">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project_stack">
                {project.stack.map((item, index) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </div>
              <div className="project_links space-x-5">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  id="live"
                  className="bg-transparent border border-[#1a2d4f] rounded-md"
                >
                  {" "}
                  <MdLiveTv size={20} className="mr-5" /> Live
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  id="code"
                  className="bg-transparent border border-[#1a2d4f] rounded-md"
                >
                  <FiGithub size={20} className="mr-5" /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button url={"https://github.com/Trend20"}>More on GitHub</Button>
    </div>
  );
};

export default Work;
