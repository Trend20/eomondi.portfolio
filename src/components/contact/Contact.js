import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Copyright from "./Copyright";
import SectionHeader from "../../common/SectionHeader";
import SocialLinks from "../../common/SocialLinks";

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
      <SectionHeader heading={'Hire Me'} overlayText={'Contact'}/>

      <div className="contact-details">
        <h1>Get In Touch</h1>
        <p>
          I’m currently looking for any new opportunities and my inbox is always
          open. Whether you have a project or just want to say hi, I’ll get back
          to you!
        </p>
      </div>
      <SocialLinks />
      <Copyright />
    </div>
  );
};

export default Contact;
