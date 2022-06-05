import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styled from 'styled-components';

const Experience = () =>{
  return(
    <ExperienceContainer className='experience'>
        <H3>
          <ExperienceSpan>02.</ExperienceSpan>
          Where I've Worked
        </H3>

        <PreviousCompanies className="previous-companies">
        <Tabs>
          <TabList>
            <Tab>Mortgage Ezy</Tab>
            <Tab>Jag Technology LLC</Tab>
            <Tab>Outgrowify</Tab>
          </TabList>

          <TabPanel>
            <TabContentContainer>
              <Tittle>Frontend Engineer <TittleAnchor href="#">@ Mortgage Ezy</TittleAnchor></Tittle>
              <JobDuration>June 2021 - May 2022</JobDuration>
              <div className="roles">
                <JobDetails>Contributed to the Frontend code for the SMSF application in Angular.</JobDetails>
                <JobDetails>Wrote unit tests for different Angular components.</JobDetails>
                <JobDetails>Used TypeScript to write Angular components and services.</JobDetails>
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
          <TabPanel>
          <div>
              <Tittle>Frontend React Developer <TittleAnchor href="#">@ Jag Technology</TittleAnchor></Tittle>
              <JobDuration>June 2021 - May 2022</JobDuration>
              <div className="roles">
                <JobDetails>Contributed to the Frontend code for the SMSF application in Angular.</JobDetails>
                <JobDetails>Wrote unit tests for different Angular components.</JobDetails>
                <JobDetails>Used TypeScript to write Angular components and services.</JobDetails>
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
            </div>
          </TabPanel>
          <TabPanel>
          <div>
              <Tittle>Frontend Developer Intern <TittleAnchor href="#">@ Outgrowify</TittleAnchor></Tittle>
              <JobDuration>June 2021 - May 2022</JobDuration>
              <div className="roles">
                <JobDetails>Contributed to the Frontend code for the SMSF application in Angular.</JobDetails>
                <JobDetails>Wrote unit tests for different Angular components.</JobDetails>
                <JobDetails>Used TypeScript to write Angular components and services.</JobDetails>
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
            </div>
          </TabPanel>
        </Tabs>
        </PreviousCompanies>
    </ExperienceContainer>
  )
}

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 100%;
  color: #8892b0;
`

const H3 = styled.h3`
  display: flex;
  padding: 20px 0px;
  color:  #cbd2e6;
  font-size: 1.5rem;
  align-items: center;
`

const ExperienceSpan = styled.span`
  display: flex;
  margin-right: 20px;
  color: #cc2121;
  font-size: 1rem;
`

const PreviousCompanies = styled.div`
  display: flex;
  width: 100%;
`

const TabContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const Tittle = styled.h3`
  display: flex;
  font-size: 1rem;
`

const TittleAnchor = styled.a`
  color: #cc2121;
  margin-left: 5px;
  text-decoration: none;
`

const JobDuration = styled.p`
  display: flex;
  font-size: 0.8rem;
  line-height: 12px;
  margin-top: 20px;
`

const JobDetails = styled.p`
 &::before{
  content: "▹";
  line-height: 12px;
  margin-right: 20px;
  color: #cc2121;
 }
 padding-top: 10px;
 width: 100%;
 font-size: 0.8rem;
`


export default Experience;