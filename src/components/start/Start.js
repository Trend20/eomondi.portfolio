import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./Start.css";
import LazyLoad from "react-lazyload";
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../../assets/images/profile.png'
import Resume from "./Resume";
import SocialLinks from "../../common/SocialLinks";

const Start = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div id="intro" data-aos="fade-down" data-aos-duration="1500">
      <div className="about-img">
        <LazyLoad className="lazy-container">
          <img src={profileImg} alt="profile-pic" />
        </LazyLoad>
        <div className="about_heading">
            <TypeAnimation
                sequence={[
                    'Hello 👋, I\'m Enock',
                    1000,
                    'Software Engineer 💻',
                    1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', width:'100%', textTransform:'uppercase', display: 'flex', justifyContent:'center', alignItems:'center', lineHeight:'inherit' }}
                repeat={Infinity}
            />
        </div>
      </div>
      <div className="about_description">
        <p className="description_content">
            "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past."
            Let's build something remarkable together!
        </p>
      </div>
        <SocialLinks />
       <Resume />
    </div>
  );
};

export default Start;
