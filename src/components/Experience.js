import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';
import { motion } from "framer-motion";
import '../App.css';
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Experience = () =>{
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <ExperienceContainer className='experience' id='experience'>
        <div class="head">
            <h1>Experience</h1>
            <p><span></span>Where I've Worked</p>
        </div>
        <PreviousCompanies className="previous-companies" style={{ marginTop:'70px' }}>
            <Box sx={{ flexGrow: 1, color:'#fff', display: 'flex', height: '400px' }}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{ borderRight: 1, borderColor: 'divider', textAlign:'left', color:'#fff', display:'flex', height:'400px' }}
          >
            <Tab label="Riverbank" {...a11yProps(0)} style={{ color:'#fff', textTransform:'capitalize' }} />
            <Tab label="Whrrl Fintech" {...a11yProps(1)} style={{ color:'#fff', textTransform:'capitalize' }} />
            <Tab label="Mortgage Ezy" {...a11yProps(2)} style={{ color:'#fff', textTransform:'capitalize' }} />
            <Tab label="Jag Technology" {...a11yProps(3)} style={{ color:'#fff', textTransform:'capitalize' }} />
          </Tabs>
          <TabPanel value={value} index={0} style={{ height:'1200px' }}>
              <TabContentContainer>
                {/* <img src="/img/whrrl.png" alt="whrrl" /> */}
                <Tittle>FullStack Engineer</Tittle>
                <JobDuration>June 2022 - Present</JobDuration>
                <div className="roles">
                  <JobDetails>
                    Participating in the design and creation of scalable software.
                  </JobDetails>
                  <JobDetails>
                    Writing clean, functional code on the front- and back-end.
                  </JobDetails>
                  <JobDetails>
                    Testing and fixing bugs or other coding issues.
                  </JobDetails>
                </div>
              </TabContentContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
              <TabContentContainer>
                <Tittle>Frontend Engineer</Tittle>
                <JobDuration>June 2021 - May 2022</JobDuration>
                <div className="roles">
                  <JobDetails>
                    Built the Mezy Dashboard using React.js for Frontend while consuming REST APIS 
                    using Axios from a SpringBoot Backend.
                  </JobDetails>
                  <JobDetails>
                    Utilized the latest frontend libraries and built reusable 
                    components using React.js to speed up development time by 30%.
                  </JobDetails>
                  <JobDetails>
                    Used Bootstrap for styling the Mezy Dashboard hence increasing the speed of 
                    the application and reducing the load time of the site by 50%.
                  </JobDetails>
                </div>
              </TabContentContainer>
          </TabPanel>
          <TabPanel value={value} index={2}>
              <TabContentContainer>
                  <Tittle>Frontend React Developer</Tittle>
                  <JobDuration>June 2021 - May 2022</JobDuration>
                  <div className="roles">
                    <JobDetails>
                      Developed and implemented highly responsive user interface components using react concepts. 
                    </JobDetails>
                    <JobDetails>
                      Created website layouts from simple designs by using React.js, and HTML/CSS /JavaScript practices.
                    </JobDetails>
                    <JobDetails>
                      Fixed bugs from existing websites and implemented enhancements that significantly improved web functionality and speed.
                    </JobDetails>
                  </div>
              </TabContentContainer>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <TabContentContainer>
              <Tittle>Frontend Developer Intern</Tittle>
              <JobDuration>June 2021 - May 2022</JobDuration>
              <div className="roles">
                <JobDetails>
                  Collaborated, designed, and tested innovative applications, and supported those applications for our highly valued customers. 
                </JobDetails>
                <JobDetails>
                  Created and maintained the company website while documenting the different releases.
                </JobDetails>
                <JobDetails>
                  Employed Design Thinking to create products that provided a great user experience along with high performance, security, quality, and stability. 
                </JobDetails>
              </div>
          </TabContentContainer>
          </TabPanel>
        </Box>
      </PreviousCompanies>
    </ExperienceContainer>
  )
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 100%;
  // color: #8892b0;

  @media screen and (max-width: 768px){
    width: 100%;
    padding: 20px;
    margin-top: 50px;
  }
  @media (min-width: 1024px) {
   
  }
`

// const H3 = styled.h3`
//   display: flex;
//   padding: 20px 0px;
//   color:  #cbd2e6;
//   font-size: 1.5rem;
//   align-items: center;
//   width: 50%;

//   @media screen and (max-width: 768px){
//     width: 100%;
//     margin: 0px;
//     padding: 0px;
//     display: flex;
//   }
//   @media (min-width: 1024px) {
    
//   }
// `

// const ExperienceSpan = styled.span`JobDetails
//   display: flex;
//   margin-right: 20px;
//   color: #cc2121;
//   font-size: 1rem;

//   @media screen and (max-width: 768px){
//     margin-right: 10px;
//     padding: 0px;
//   }
//   @media (min-width: 1024px) {
    
//   }
// `

const PreviousCompanies = styled.div`
  // display: grid;
  // grid-template-columns: repeat(3, 2fr);
  width: 100%;
  height: 400px;
  display:flex;
  justify-content:'center';
  margin:auto;
  // grid-gap: 20px;
  // margin-top: 70px;

  @media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: repeat(1, 2fr);
    width: 100%;
    grid-gap: 20px;
    margin-top: 30px;
    width: 100%;
  }
  @media (min-width: 1024px) {
   
  }
`

const TabContentContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-shadow: rgb(39, 39, 66) 0px 5px 15px;
  padding: 20px;
  cursor: pointer;

  img{
    max-width: 100px;
    display: flex;
    height: 100px;
    cursor: pointer;
    background-color: #fff;
    border-radius: 50%;
    padding: 20px;
    transition: 0.3s ease;

    &:hover{
      background: rgb(39, 39, 66);
    }
  }

  @media screen and (max-width: 768px){
    width: 100%;
    margin: 0px;
  }
  @media (min-width: 1024px) {
    
  }
`

const Tittle = styled.h3`
  display: flex;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 5px;

  @media screen and (max-width: 768px){
    width: 100%;
    font-size: 0.8rem;
  }
  @media (min-width: 1024px) {
    
  }
`

const JobDuration = styled.p`
  display: flex;
  font-size: 0.8rem;
  line-height: 12px;
  margin-top: 10px;

  @media screen and (max-width: 768px){
    width: 100%;
    margin: 0px;
    padding: 0px;
  }
  @media (min-width: 1024px) {
    
  }
`

const JobDetails = styled.p`
 &::before{
  content: "▹";
  line-height: 12px;
  margin-right: 3px;
  color: #cc2121;
  width:'60%'
 }
 padding-top: 5px;
 width: 100%;
 font-size: 0.8rem;
 text-align: justify;
 text-indent: 0px;
 margin-top: 5px;

 @media screen and (max-width: 768px){
  width: 100%;
}
@media (min-width: 1024px) {
 
}
`


export default Experience;