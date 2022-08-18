import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Work = () =>{
  return(
    <WorkContainer className='work' id='work'>
      {/* data-aos="fade-down" data-aos-duration="2000" */}
      <H3>
          <WorkSpan>03.</WorkSpan>
          Some Things I’ve Built
        </H3>

      <ProjectsWrapper>
      {/* data-aos="fade-down" data-aos-duration="2000" */}
        <ProjectImage>
          <a href="https://familydoctor.netlify.app/" target="_blank">
            <img src="/img/project.png" alt="project1" />
          </a>
        </ProjectImage>
        <ProjectDescription>
          <h5>Featured Project</h5>
          <h3>Family Doctor</h3>
          <p>
            Family Doctor is a web application which helps users to acquire home based health care services online. Users can book appointements with 
            the doctors and they can also be able to call for emergency services
          </p>
          <Stack>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
          </Stack>
          <ProjectLinks>
            <a href="https://github.com/Trend20/Family-Doctor" target="_blank">
              <FiGithub />
            </a>
            <a href="https://familydoctor.netlify.app/" target="_blank">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </ProjectsWrapper>

      {/* second project */}

      <SecondProjectsWrapper>
      {/* data-aos="fade-up" data-aos-duration="2000" */}
        <SecondProjectDescription>
          <h5>Featured Project</h5>
          <h3>CoursEfree</h3>
          <p>
          CoursEfree is a fiction EdTech web application providing a learning platform where
          students can log in and get access to different courses for free.  
          </p>
          <Stack style={{ justifyContent: 'flex-start' }}>
            <li>MongoDB</li>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
          </Stack>
          <ProjectLinks style={{ justifyContent: 'flex-start' }}>
            <a href="https://github.com/Trend20/CoursEfree" target="_blank">
              <FiGithub />
            </a>
            <a href="https://super-cool-site-by-trend20.netlify.app/" target="_blank">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </SecondProjectDescription>
        <ProjectImage>
          <a href="https://super-cool-site-by-trend20.netlify.app/" target="_blank">
            <img src="/img/coursefree.png" alt="project1" />
          </a>
        </ProjectImage>
      </SecondProjectsWrapper>


{/* third project */}
      <ProjectsWrapper>
      {/* data-aos="fade-up" data-aos-duration="2000" */}
        <ProjectImage>
          <a href="https://myremind.netlify.app/" target="_blank">
            <img src="/img/mguide.png" alt="project3" />
          </a>
        </ProjectImage>
        <ProjectDescription>
          <h5>Featured Project</h5>
          <h3>M-Guide</h3>
          <p>
            This is a landing page for a marketing startup that gives entrepreneurs light on how to best do their marketing for their products and services.
          </p>
          <Stack>
            <li>HTML</li>
            <li>CSS3</li>
            <li>Vanilla JavaScript</li>
          </Stack>
          <ProjectLinks>
            <a href="https://github.com/Trend20/M-Guide" target="_blank">
              <FiGithub />
            </a>
            <a href="https://m-guide.netlify.app/" target="_blank">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </ProjectsWrapper>

      <ShowMoreButton>
        <a href="https://github.com/Trend20" target="_blank">Show More</a>
      </ShowMoreButton>
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
width: 100%;
margin: auto;
margin-bottom: 50px;
color: #8892b0;

@media screen and (max-width: 768px){
  padding: 20px;
}
`

const H3 = styled.h3`
display: flex;
padding: 20px 0px;
color:  #cbd2e6;
font-size: 1.5rem;
align-items: center;

@media screen and (max-width: 768px){
  padding: 0px;
  width: 100%;
}
`
const WorkSpan = styled.span`
display: flex;
margin-right: 20px;
color: #cc2121;
font-size: 1rem;

@media screen and (max-width: 768px){
  margin-right: 0px;
}
` 

const ProjectsWrapper = styled.div`
display: flex;
position: relative;
margin: auto;
padding: 50px 0px;

@media screen and (max-width: 768px){
  padding: 20px;
  display: flex;
  flex-direction: column;
}
`

const ProjectImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 50%;

a{
  width: 100%
}
img{
  display: flex;
  max-width: 100%;
  height: auto;
  position: relative;
  background-color: #cc2121;
}

@media screen and (max-width: 768px){
  width: 100%;
  }
`
const ProjectDescription = styled.div`
display: flex;
flex-direction: column;
width: 50%;
text-align: right;

h5{
  color: #cc2121;
  font-size: 0.7rem;
  padding: 10px 0px;
}

h3{
  color: #cbd2e6;
  font-size: 1.2rem;
  padding-bottom: 10px;
}

p{
  font-size: 0.7rem;
  background: #112240;
  padding: 20px;
  z-index: 10;
  text-align: justify;
  text-indent: 20px;
  width: 90%;
  justify-content: flex-end;
  margin-left: 38px;
}

@media screen and (max-width: 768px){
display: flex;
flex-direction: column;
width: auto;
text-align: right;

h5{
  color: #cc2121;
  font-size: 0.7rem;
  padding: 10px 0px;
}

h3{
  color: #cbd2e6;
  font-size: 1.2rem;
  padding-bottom: 10px;
}

p{
  font-size: 0.7rem;
  background: #112240;
  padding: 20px;
  z-index: 10;
  text-align: justify;
  text-indent: 20px;
  width: 100%;
  justify-content: flex-start;
  margin-left: 0px;
}
}
`
const Stack = styled.ul`
display: flex;
justify-content: flex-end;
align-items: center;

li{
  list-style: none;
  font-size: 0.7rem;
  padding: 10px 5px;
  font-weight: 700;
}
`

const ProjectLinks = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;

a{
  padding: 10px;
  color: #8892b0;

  &:hover{
    color: #cc2121;
  }
}
`

const SecondProjectsWrapper = styled.div`
display: flex;
position: relative;
margin: auto;
padding: 50px 0px;

@media screen and (max-width: 768px){
  padding: 20px;
  display: flex;
  flex-direction: column;
}
`

const SecondProjectDescription = styled.div`
display: flex;
flex-direction: column;
width: 50%;

h5{
  color: #cc2121;
  font-size: 0.7rem;
  padding: 10px 0px;
}

h3{
  color: #cbd2e6;
  font-size: 1.2rem;
  padding-bottom: 10px;
}

p{
  font-size: 0.7rem;
  background: #112240;
  padding: 20px;
  z-index: 10;
  text-align: justify;
  text-indent: 20px;
  width: 90%;
}
@media screen and (max-width: 768px){
display: flex;
flex-direction: column;
width: auto;

h5{
  color: #cc2121;
  font-size: 0.7rem;
  padding: 10px 0px;
}

h3{
  color: #cbd2e6;
  font-size: 1.2rem;
  padding-bottom: 10px;
}

p{
  font-size: 0.7rem;
  background: #112240;
  padding: 20px;
  z-index: 10;
  text-align: justify;
  text-indent: 20px;
  width: 100%;
}
}
  
`

const ShowMoreButton = styled.button`
display: flex;
width: 20%;
justify-content: center;
align-items: center;
margin: auto;
margin-top: 30px;
background: transparent;
outline: none;
border: 1px solid #cc2121;
border-radius: 5px;

a{
  display: flex;
  text-decoration: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #cc2121;
  font-weight: 500;
}

&:hover{
  background: rgb(39, 39, 66);
}

@media screen and (max-width: 768px){
width: 50%;
}
`

export default Work;