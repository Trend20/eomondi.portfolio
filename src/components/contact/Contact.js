import React from "react";
import styled from "styled-components";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import { SiHashnode } from "react-icons/si";
import { FaHackerrank } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactContainer className="contact" id="contact">
      <div class="head">
        <h1>Hire Me</h1>
        <p>
          <span></span>Contact
        </p>
      </div>

      <ContactDetails className="contact-details">
        <h1>Get In Touch</h1>
        <p>
          I’m currently looking for any new opportunities and my inbox is always
          open. Whether you have a project or just want to say hi, I’ll get back
          to you!
        </p>
        <a href="mailto:enockomondi305@gmail.com">Say Hello</a>
      </ContactDetails>

      <SocialPlatforms>
        <a href="https://github.com/Trend20" target="_blank" rel="noreferrer">
          <FiGithub />
        </a>
        <a
          href="https://twitter.com/dev_enock"
          target="_blank"
          rel="noreferrer"
        >
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/enock-omondi/"
          target="_blank"
          rel="noreferrer"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://www.hackerrank.com/enockomondi305"
          target="_blank"
          rel="noreferrer"
        >
          <FaHackerrank />
        </a>
        <a
          href="https://hashnode.com/@DevEnock"
          target="_blank"
          rel="noreferrer"
        >
          <SiHashnode />
        </a>
      </SocialPlatforms>

      <FooterContainer className="footer">
        <p>© Copyright {new Date().getFullYear()}. All right reserved </p>
      </FooterContainer>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 100px;
  color: #8892b0;

  h3 {
    display: flex;
    padding: 20px 0px;
    color: #cc2121;
    font-size: 1.5rem;
    align-items: center;
  }

  span {
    display: flex;
    margin-right: 20px;
    color: #cc2121;
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 20px;

    h3 {
      font-size: 1rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;
const ContactDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1{
  color: #cbd2e6;
  font-size: 2.5rem;
}

p{
  line-height: 1.5;
  text-align: center;
  padding: 20px 0px;
  width: 70%;
  font-size: 0.9rem;
}

a{
  display: flex;
  width: 20%;
  justify-content: center;
  align-items: center;
  margin: auto;
  background: transparent;
  outline: none;
  border: 1px solid #cc2121;
  text-decoration: none;
  border-radius: 5px;
  padding: 15px;
  color: #cc2121;
  font-weight: 500;
  margin: 50px 0px;
  cursor: pointer;

  &:hover{
    background: rgb(39, 39, 66);
  }
}

@media screen and (max-width: 768px){
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;


p{
  padding: 0px;
  text-align: center;
  width: 100%;
  font-size: 0.8rem;
}

a{
  width: 50%;

  &:hover{
    background: rgb(39, 39, 66);
  }
}
`;

const SocialPlatforms = styled.div`
  display: flex;

  a {
    display: flex;
    padding: 10px;
    cursor: pointer;
    color: #8892b0;

    &:hover {
      color: #cc2121;
    }
  }
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #8892b0;
  margin-top: 40px;

  p {
    font-size: 0.7rem;
    z-index: 10;
    text-align: justify;
    text-indent: 20px;
    color: #cc2121;
  }
`;

export default Contact;
