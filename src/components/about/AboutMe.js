import React from "react";
import { skillsData } from "../../data/myData";
import "./About.css";

const AboutMe = () => {
  return (
    <div className="about-me" id="about">
      <div class="head" id="about-head">
        <h1>About Me</h1>
        <p>
          <span></span> About
        </p>
      </div>
      <div className="description">
        <div className="contents">
          <p className="content_paragraph">
            Experienced in JavaScript, React, Next.js, TypeScript, and Tailwind
            CSS, I specialize in crafting intuitive user interfaces and scalable
            systems while writing unit tests that ensure robustness and
            reliability of the systems.
          </p>
          <p className="content_paragraph">
            As a DevOps engineer, I optimize deployment processes for seamless
            software delivery. Passionate about innovation and continuous
            improvement, I thrive on pushing the boundaries of frontend
            development and DevOps practices.
          </p>
        </div>
        <div className="languages">
          {skillsData.map((tech, index) => {
            return (
              <div className="skills">
                <li key={index} className="tech_list">
                  {tech.icon}
                </li>
                <p>{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
