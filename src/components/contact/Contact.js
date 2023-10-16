import React from "react";
import { socialLinkData } from "../../data/myData";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div class="head">
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
