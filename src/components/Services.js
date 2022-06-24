import React from 'react'
import styled from 'styled-components'

const Services = () => {
  return (
    <ServiceContainer className='services'>
      <H3>
        <ServiceSpan>02.</ServiceSpan>
        <span>Services</span>
      </H3>
          <ServiceContent>
            <Service>
            <i><img src="/img/project-management.png" alt="project-management" /></i>
              <h3>Project Management</h3>
              <p>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
            </Service>
            <Service>
            <i><img src="/img/programming-course.png" alt="programming" /></i>
              <h3>Web Development</h3>
              <p>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
            </Service>
            <Service>
            <i><img src="/img/cloud-data.png" alt="project-management" /></i>
              <h3>Database Management</h3>
              <p>I use various web technologies to develop attractive websites which converts visitors to customers. I develop creative and responsive website layouts.</p>
            </Service>
          </ServiceContent>
    </ServiceContainer>
  )
}


const ServiceContainer = styled.div`
display: flex;
padding: 100px;
width: 100%;
justify-content: space-between;
align-items: flex-start;
flex-direction: column;
color: #8892b0;
`

const H3 = styled.h3`
display: flex;
padding: 20px 0px;
color:  #cbd2e6;
font-size: 1.5rem;
align-items: center;
width: 50%;
`

const ServiceSpan = styled.span`
display: flex;
margin-right: 10px;
color: #cc2121;
font-size: 1rem;
`

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 2fr);
  width: 100%;
  grid-gap: 20px;
  margin-top: 30px;
`

const Service = styled.div`
  display: flex;
  flex-direction: column;

  i img{
    filter: invert(76%) sepia(30%) saturate(3461%) hue-rotate(321deg)
    brightness(98%) contrast(91%);
    max-width: 120%;
  }

  h3{
    margin-top: 20px;
    color: #cbd2e6;
    font-size: 0.8rem;
  }

  p{
    display: flex;
    margin-top: 20px;
    font-size: 0.8rem;
    line-height: 1.8;
  }
`


export default Services;