import React from 'react';
import styled from 'styled-components';

const Contact = () =>{
  return(
    <ContactContainer className='contact' id='contact' data-aos="fade-down" data-aos-duration="2000">
      <h3>
        <span>04.</span>
        What's Next?
      </h3>

      <ContactDetails className="contact-details">
        <h1>Get In Touch</h1>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have
          a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <a href="mailto:enockomondi305@gmail.com">Say Hello</a>
      </ContactDetails>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
padding: 100px;
color: #8892b0;

h3{
display: flex;
padding: 20px 0px;
color:  #cc2121;
font-size: 1.5rem;
align-items: center;
}

span{
display: flex;
margin-right: 20px;
color: #cc2121;
font-size: 1rem;
}
`
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
`

export default Contact;