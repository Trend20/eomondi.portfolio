import React from 'react'
import styled from 'styled-components';

const technologies = ['Javascript', 'React', 'Angular', 'Node.js', 'MongoDB'];

const AboutMe = () =>{
  return(
    <AboutWrapper className='about-me'>
        <Description className="description">
          <h3>
            <span>01.</span>
            About Me
          </h3>
          <div className="contents">
          <p>
            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking 
            together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          </div>

          <div className="languages">
            {
              technologies.map((tech, index) =>{
                return(
                  <li key={index}>{tech}</li>
                )
              })
            }
          </div>
        </Description>  
        <AboutImage className="about-img">
          <Img src="/img/prof.png" alt="profile-pic" />
        </AboutImage>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  display: flex;
  padding: 100px;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
`

const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`

const AboutImage = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
`

const Img = styled.img`
  border: 1px solid #fff;
  max-width: 100%;
  padding: 20px;
  border-radius: 10px;
  margin: 30px;
`

export default AboutMe;