import React, { useEffect } from "react";
import { socialLinkData } from "../../data/myData";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Copyright from "./Copyright";

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="contact"
      id="contact"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="head" id="contact-head">
        <h1>Hire Me</h1>
        <p>
          <span></span>Contact
        </p>
      </div>

      <div className="contact-details">
        <h1>Get In Touch</h1>
        <p>
          I’m currently looking for any new opportunities and my inbox is always
          open. Whether you have a project or just want to say hi, I’ll get back
          to you!
        </p>
      </div>

      <div className="social_platforms">
        {socialLinkData.map((icon) => (
          <a key={icon.id} href={icon.socialLink} target="_blank" rel="noreferrer">
            {icon.icon}
          </a>
        ))}
      </div>
      <Copyright />
    </div>
  );
};

export default Contact;
