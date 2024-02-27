import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import { socialLinkData } from "../../data/myData";
import "./Start.css";
import LazyLoad from "react-lazyload";

const Start = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="intro" data-aos="fade-down" data-aos-duration="1500">
      <div className="about-img">
        <LazyLoad className="lazy-container">
          <img src="/img/profile.png" alt="profile-pic" />
        </LazyLoad>
        <div className="about_heading">
          <h3>Enock Omondi</h3>
        </div>
      </div>
      <div className="about_description">
        <p className="description_content">
          Hi there! I'm a seasoned frontend software engineer with over 3 years
          of experience specializing in React, TypeScript, Next.js, Node.js, and
          Tailwind CSS. I thrive on crafting seamless user experiences and
          optimizing performance. Let's build something remarkable together!
        </p>
      </div>
      <div className="about_icons">
        {socialLinkData.map((item) => (
          <i key={item.id}>
            <a href={item.socialLink} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          </i>
        ))}
      </div>
      <div className="about_btn">
        <a
          href="mailto:enockomondi305@gmail.com"
          target="_blank"
          className="about_anchor"
          rel="noreferrer"
        >
          Let us Connect!
        </a>
      </div>
    </div>
  );
};

export default Start;
