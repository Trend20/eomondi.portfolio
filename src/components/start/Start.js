import React from "react";
import "animate.css";
import { socialLinkData } from "../../data/myData";
import "./Start.css";

const Start = () => {
  return (
    <div id="intro">
      <div className="about-img">
        <img src="/img/profile.png" alt="profile-pic" />
      </div>
      <div className="about_heading">
        <h3>Enock Omondi</h3>
        <p>I build interactive web stuff.</p>
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
