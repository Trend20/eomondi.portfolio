import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";
import SectionHeader from "../../common/SectionHeader";
import Technologies from "./Technologies";
import profileImg from "../../assets/images/about.svg";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
      <div className="about-me" id="about">
          <SectionHeader heading="About Me" overlayText="About"/>
          <div className="flex justify-start space-x-8 mt-10 w-full">
              <div className="w-1/4">
                  <img src={profileImg} alt="profile-pic"/>
              </div>
              <div className="description w-3/4 ml-20" data-aos="fade-down" data-aos-duration="1500">
                  <div className="contents">
                      <p className="content_paragraph">
                          Hi there 👋🏽! I'm a software engineer with over 4 years
                          of experience specializing in Frontend Development. I thrive on crafting seamless user
                          experiences and
                          optimizing performance.
                      </p>
                      <p className="content_paragraph">
                          Currently, I focus on helping businesses and individuals scale by building the performant and
                          scalable web
                          applications using <b className="text-[#cc2121]"> Javascript </b>  and <b className="text-[#cc2121]">Typescript</b>.
                      </p>
                  </div>
                  <Technologies/>
              </div>
          </div>
      </div>
  );
};

export default AboutMe;
