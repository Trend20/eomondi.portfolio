import React, {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { skillsData } from "../../data/myData";
import "./About.css";
import ReactCardFlip from 'react-card-flip';
import FlipCard from 'react-flipcard';

const AboutMe = () => {
  const[isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () =>{
    setIsFlipped((prevState) => !prevState)
  }
  useEffect(() => {
    AOS.init();
  }, []);
  // onMouseEnter={handleFlip} onMouseLeave={handleFlip}
  return (
    <div className="about-me" id="about">
      <div className="head" id="about-head">
        <h1>About Me</h1>
        <p>
          <span></span> About
        </p>
      </div>
      <div
        className="description"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        {/*<ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">*/}
          <div className="contents">
            <p className="content_paragraph">
              Hi there! I'm a seasoned software engineer with over 4 years
              of experience specializing in React, TypeScript, Next.js, Node.js, and
              Tailwind CSS. I thrive on crafting seamless user experiences and
              optimizing performance.
            </p>
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
                  <div className="skills" key={index}>
                    <li className="tech_list">
                      {tech.icon}
                    </li>
                    <p>{tech.name}</p>
                  </div>
              );
            })}
          </div>
        {/*</ReactCardFlip>*/}
      </div>
    </div>
  );
};

export default AboutMe;
