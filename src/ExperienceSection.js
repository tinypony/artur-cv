import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Section, Subsection } from './components'
import titleImage from './assets/img/tie.png'

const DATE_FORMAT = 'MMM, YYYY'

const ExperienceBlockBase = styled.div`
  margin-bottom: 2rem;
`

const ExperienceBlockTitle = styled.div`
  margin: 0;
  font-size: ${props => props.theme.font.size.mediumLarge};
`

const ExperiencePosition = styled.div`
  font-family: NexaBold;
  margin: 0;
  font-size: ${props => props.theme.font.size.medium};
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`

const JobDescription = styled.div`
  font-family: NexaLight;
  margin: 0;
  font-size: ${props => props.theme.font.size.medium};
`

const CompanyName = styled.span`
  font-family: NexaBold;
`

const WorkDuration = styled.div`
  display: inline;
  margin-left: 0.5rem;
  font-family: NexaLight;
`

const ExperienceBlock = ({company, position, startingDate, endDate, children}) => {
  return <ExperienceBlockBase>
    <ExperienceBlockTitle>
      <CompanyName>{company}</CompanyName>
      <WorkDuration>{startingDate.format(DATE_FORMAT)} - {endDate ? endDate.format(DATE_FORMAT) : 'present' }</WorkDuration>
    </ExperienceBlockTitle>
    <ExperiencePosition>{position}</ExperiencePosition>
    {children}
  </ExperienceBlockBase>
}

export const ExperienceSection = () => {
  return <Section image={titleImage} title="Experience">
    <ExperienceBlock company='EPAM Systems' position='Senior software engineer' startingDate={moment('2019-04-22')}>
      <JobDescription>
        Working as a software engineer for customer projects in life sciences domain.
        Main responsibilities include frontend ReactJS development, backend Spring development, DevOps with AWS, leading
        engineering teams and requirements discovery with the stakeholders.
      </JobDescription>
    </ExperienceBlock>
    <ExperienceBlock
      company='PHZ FullStack'
      position='Senior software envgineer'
      startingDate={moment('2017-11-03')}
      endDate={moment('2019-04-19')}
    >
      <JobDescription>
        Working as a consulting fullstack developer specializing in JavaScript
        frontends using ReactJS, JavaScript backends running on NodeJS, and
        Spring-powered Java backends. Client projects available in PDF version of this CV.
      </JobDescription>
    </ExperienceBlock>
    <ExperienceBlock company='Comptel' position='Technical cloud consultant' startingDate={moment('2017-01-01')} endDate={moment('2017-11-02')}>
      <JobDescription>
        Responsible for the technical side of the cloudification of
        core products. My main task was to accumulate knowledge
        on public cloud providers, their offerings and the
        latest cloud technologies with the later intention to pass
        it forward to the teams who need it the most.
        I also help teams to deploy and test their products in
        public cloud as well as to redefine software architecture
        based on cloud best practices.
      </JobDescription>
    </ExperienceBlock>
    <ExperienceBlock company='Comptel' position='Software engineer' startingDate={moment('2015-05-10')} endDate={moment('2016-12-31')}>
      <JobDescription>
        I helped to develop a new UI for one of the core products.
        Doing so I mastered the latest technologies (ReactJS, Redux)
        in a matter of weeks and contributed to the
        release of the next version of the product.
        Since January 2016 my team and I were tasked to jumpstart
        the development of a completely new product for
        real-time customer engagement that is currently getting
        traction among mobile operators
      </JobDescription>
    </ExperienceBlock>
    <ExperienceBlock company='Comptel' position='Junior software engineer' startingDate={moment('2011-05-02')} endDate={moment('2014-12-31')}>
      <JobDescription>
        Developed SDK platform that is used by company’s
        products. Implemented both front-end and back-end
        parts of the SDK.
        Played a key role in the team due to deep understanding
        of the entire technology stack from development and
        testing to release and production.
        Developed and maintained a back-end solution for interactive
        SIM card activation on hand-held devices.
        Showed strong learning ability in both in-house products
        and standard technologies (Adobe Flex, Hibernate)
      </JobDescription>
    </ExperienceBlock>
  </Section>
}
