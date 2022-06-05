import React from 'react';
import styled from 'styled-components';

const Contact = () =>{
  return(
    <ContactContainer className='contact'>
      <h3>
        <span>04.</span>
        What's Next?
      </h3>

      <div className="contact-details">
        <h1>Get In Touch</h1>
        <p>
          Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have
          a question or just want to say hi, I’ll try my best to get back to you!
        </p>
        <button>Say Hello</button>
      </div>
    </ContactContainer>
  )
}

const ContactContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`

export default Contact;