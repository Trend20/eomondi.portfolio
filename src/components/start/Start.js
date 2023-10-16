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
        <h1>Enock Omondi</h1>
        <p>I build interactive web stuff.</p>
      </div>
      <div className="about_description">
        <p className="description_content">
          <p>
            I am a highly collaborative team player who thrives in dynamic and
            fast-paced environments. My excellent communication and
            problem-solving skills allow me to work effectively with
            cross-functional teams to deliver solutions that exceed
            expectations.
          </p>
        </p>
      </div>
      <div className="about_icons">
        {socialLinkData.map((item) => (
          <i key={item.id}>
            <a href={item.socialLink}>{item.icon}</a>
          </i>
        ))}
      </div>
      <div className="about_btn">
        <a href="mailto:enockomondi305@gmail.com" className="about_anchor">
          Let us Connect!
        </a>
      </div>
    </div>
  );
};

export default Start;
