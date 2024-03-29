import React, { useEffect } from "react";
import { socialLinkData } from "../../data/myData";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div class="head" id="contact-head">
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
        <a href="mailto:enockomondi305@gmail.com">Say Hello</a>
      </div>

      <div className="social_platforms">
        {socialLinkData.map((icon) => (
          <a href={icon.socialLink} target="_blank" rel="noreferrer">
            {icon.icon}
          </a>
        ))}
      </div>

      <div className="footer">
        <p>© Copyright {new Date().getFullYear()}. All right reserved </p>
      </div>
    </div>
  );
};

export default Contact;
