import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Work = () =>{
  return(
    <WorkContainer className='work'>
      <H3>
          <WorkSpan>03.</WorkSpan>
          Some Things I’ve Built
        </H3>

      <ProjectsWrapper>
        <ProjectImage>
          <a href="#">
            <img src="/img/project.png" alt="project1" />
          </a>
        </ProjectImage>
        <ProjectDescription>
          <h5>Featured Project</h5>
          <h3>Family Doctor</h3>
          <p>
            Family Doctor is a web application which helps users to acquire home based health care services online. Users can book appointements with 
            the doctors and they can also be able to call for emergencey services
          </p>
          <Stack>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </Stack>
          <ProjectLinks>
            <a href="#">
              <FiGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </ProjectsWrapper>

      {/* second project */}

      <SecondProjectsWrapper>
        <SecondProjectDescription>
          <h5>Featured Project</h5>
          <h3>Family Doctor</h3>
          <p>
            Family Doctor is a web application which helps users to acquire home based health care services online. Users can book appointements with 
            the doctors and they can also be able to call for emergencey services
          </p>
          <Stack style={{ justifyContent: 'flex-start' }}>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </Stack>
          <ProjectLinks style={{ justifyContent: 'flex-start' }}>
            <a href="#">
              <FiGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </SecondProjectDescription>
        <ProjectImage>
          <a href="#">
            <img src="/img/project.png" alt="project1" />
          </a>
        </ProjectImage>
      </SecondProjectsWrapper>


{/* third project */}
      <ProjectsWrapper>
        <ProjectImage>
          <a href="#">
            <img src="/img/project.png" alt="project1" />
          </a>
        </ProjectImage>
        <ProjectDescription>
          <h5>Featured Project</h5>
          <h3>Family Doctor</h3>
          <p>
            Family Doctor is a web application which helps users to acquire home based health care services online. Users can book appointements with 
            the doctors and they can also be able to call for emergencey services
          </p>
          <Stack>
            <li>ExpressJS</li>
            <li>React</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </Stack>
          <ProjectLinks>
            <a href="#">
              <FiGithub />
            </a>
            <a href="#">
              <FiExternalLink />
            </a>
          </ProjectLinks>
        </ProjectDescription>
      </ProjectsWrapper>
    </WorkContainer>
  )
}

const WorkContainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
width: 100%;
`

const H3 = styled.h3`
display: flex;
padding: 20px 0px;
color:  #cbd2e6;
font-size: 1.5rem;
align-items: center;
`
const WorkSpan = styled.span`
display: flex;
margin-right: 20px;
color: #cc2121;
font-size: 1rem;
` 

const ProjectsWrapper = styled.div`
display: flex;
position: relative;
margin: auto;
padding: 50px 0px;
`

const ProjectImage = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: auto;

img{
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #cc2121;
}
`
const ProjectDescription = styled.div`
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
  width: 90%;
  justify-content: flex-end;
  margin-left: 38px;
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
}
&:hover{
  color: #cc2121;
}
`

const SecondProjectsWrapper = styled.div`
display: flex;
position: relative;
margin: auto;
padding: 50px 0px;
`

const SecondProjectDescription = styled.div`
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
  width: 90%;
}
`

export default Work;