import React, { useEffect } from "react";
import { FiGithub } from "react-icons/fi";
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
        className="projects_wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {workData.map((project, index) => (
          <div
            className="project flex flex-col space-y-4 border border-[#1a2d4f] rounded-lg"
            key={index}
          >
            <div className="project_image">
              <a href={project.projectLink} target="_blank" rel="noreferrer">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </a>
            </div>
            <div className="project_description flex flex-col space-y-3">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-gray-300">{project.description}</p>
              <div className="project_stack flex flex-wrap gap-2">
                {project.stack.map((item, index) => (
                  <p
                    key={item.id}
                    className="opacity-70 bg-[#1a2d4f] text-xs px-2 py-1 rounded-md"
                  >
                    {item.name}
                  </p>
                ))}
              </div>
              <div className="project_links flex space-x-3">
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noreferrer"
                  id="live"
                  className="flex items-center bg-transparent border border-[#1a2d4f] rounded-md px-3 py-1 text-sm"
                >
                  <MdLiveTv size={20} className="mr-2" /> Live
                </a>
                <a
                  href={project.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  id="code"
                  className="flex items-center bg-transparent border border-[#1a2d4f] rounded-md px-3 py-1 text-sm"
                >
                  <FiGithub size={20} className="mr-2" /> Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button url={"https://github.com/Trend20"}>More on GitHub</Button>
      </div>
    </div>
  );
};

export default Work;
