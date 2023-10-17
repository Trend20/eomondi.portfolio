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
            Hello! My name is Enock and I enjoy creating things that live on the
            internet. My interest in web development started back in 2019 when I
            decided to try and edit a web template but it turned to be my first
            web project and it taught me a lot about HTML & CSS!
          </p>
          <p className="content_paragraph">
            My main focus these days is building accessible, inclusive products
            and digital experiences for a variety of clients.
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
