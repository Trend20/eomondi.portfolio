import React, {useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import SectionHeader from "../../common/SectionHeader";
import Technologies from "./Technologies";
import profileImg from "../../assets/images/profile.png";

const AboutMe = () => {
  const[isFlipped, setIsFlipped] = useState(false);
  const handleFlip = () =>{
    setIsFlipped(!isFlipped)
  }
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <div className="about-me" id="about">
          <SectionHeader heading="About Me" overlayText="About"/>
          <div className="flex justify-start space-x-5 mt-10 w-full">
              <div className="w-1/4">
                  <img src={profileImg} alt="profile-pic"/>
              </div>
              <div className="description w-3/4" data-aos="fade-down" data-aos-duration="1500">
                  <div className="contents">
                      <p className="content_paragraph">
                          Hi there! I'm a software engineer with over 4 years
                          of experience specializing in Frontend Development. I thrive on crafting seamless user
                          experiences and
                          optimizing performance.
                      </p>
                      <p className="content_paragraph">
                          Currently, I focus on helping businesses and individuals scale by building the performant and
                          scalable web
                          applications using Javascript and Typescript.
                      </p>
                  </div>
                  <Technologies/>
              </div>
          </div>
      </div>
  );
};

export default AboutMe;
