import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Section } from './components'
import titleImage from './assets/img/tie.png'

const DATE_FORMAT = 'MMM, YYYY'

const TimelineContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${ props => props.theme.color.gradient };
    border-radius: 2px;

    ${ props => props.theme.media.upTo.tablet } {
      display: none;
    }
  }
`

const ExperienceBlockBase = styled(motion.div)`
  margin-bottom: 2.5rem;
  position: relative;

  ${ props => props.theme.media.from.tablet } {
    padding-left: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: -7.5px;
    top: 0.5rem;
    width: 13px;
    height: 13px;
    background: white;
    border: 2px solid ${ props => props.theme.color.primary };
    border-radius: 50%;

    ${ props => props.theme.media.upTo.tablet } {
      display: none;
    }
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const ExperienceHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
`

const CompanyName = styled.span`
  font-family: NexaBold;
  font-size: ${ props => props.theme.font.size.mediumLarge };
  color: ${ props => props.theme.color.textDark };
`

const WorkDuration = styled.span`
  font-family: NexaLight;
  font-size: ${ props => props.theme.font.size.small };
  color: ${ props => props.theme.color.textLight };
  background: ${ props => props.theme.color.background };
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
`

const ExperiencePosition = styled.div`
  font-family: NexaBold;
  margin-bottom: 0.75rem;
  font-size: ${ props => props.theme.font.size.medium };
  color: ${ props => props.theme.color.primary };
`

const JobDescription = styled.div`
  font-family: NexaLight;
  font-size: ${ props => props.theme.font.size.medium };
  color: ${ props => props.theme.color.textMuted };
  line-height: 1.6;

  ul {
    margin: 0.75rem 0;
    padding-left: 1.25rem;

    li {
      margin: 0.4rem 0;
      position: relative;

      &::marker {
        color: ${ props => props.theme.color.accent };
      }
    }
  }
`

const experienceVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const ExperienceBlock = ({company, position, startingDate, endDate, children, index}) => {
  return <ExperienceBlockBase
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={experienceVariants}
    transition={{ delay: index * 0.1 }}
  >
    <ExperienceHeader>
      <CompanyName>{ company }</CompanyName>
      <WorkDuration>{ startingDate.format(DATE_FORMAT) } - { endDate ? endDate.format(DATE_FORMAT) : 'present' }</WorkDuration>
    </ExperienceHeader>
    <ExperiencePosition>{ position }</ExperiencePosition>
    { children }
  </ExperienceBlockBase>
}

export const ExperienceSection = () => {
  return <Section image={ titleImage } title="Experience">
    <TimelineContainer>
      <ExperienceBlock
        company='Epicly'
        position='Founder'
        startingDate={ dayjs('2025-07-01') }
        index={0}
      >
        <JobDescription>
          Created an iOS app for planning short trips with AI assistance.
          The app helps users to create personalized itineraries based on their preferences and interests.
          Main technologies used are React native, NestJS, AWS, PostgreSQL.

          <div>
            <a href='https://epiclyapp.com' target="_blank">https://epiclyapp.com</a>
          </div>
        </JobDescription>
      </ExperienceBlock>

      <ExperienceBlock
        company='Freelancer'
        position='Master chief of fullstack development'
        startingDate={ dayjs('2021-04-01') }
        index={1}
      >
        <JobDescription>
          Implementation of customer project in financial and investment domain. Main technologies used are NodeJS, Vue
          v2, AWS, PostgreSQL
        </JobDescription>
      </ExperienceBlock>

      <ExperienceBlock
        company='EPAM Systems'
        position='Senior software engineer'
        startingDate={ dayjs('2019-04-22') }
        endDate={ dayjs('2021-03-26') }
        index={2}
      >
        <JobDescription>
          Working on customer projects in life sciences domain such as:
          <ul>
            <li>Migration of in-house analysis pipeline for cancer patients' genome to
              opensource Nextflow platform; Univa Grid Engine and AWS Batch were used as compute resource providers.
            </li>
            <li>Centralized ETL solution for pre-clinical studies previously stored in Excel format.</li>
            <li>Rapid prototype for indexing and searching open pharmacology
              and chemistry datasets (ChEMBL, Guide to pharmacology) offline.
            </li>
            <li>Self-service for whitelisting IP ranges for electronic lab notebook SaaS solution.</li>
          </ul>

          Main responsibilities include
          <ul>
            <li>Frontend development with ReactJS</li>
            <li>Backend development with Spring</li>
            <li>DevOps in AWS</li>
            <li>Leading engineering teams</li>
            <li>Helping with requirements discovery and communicating with the stakeholders</li>
          </ul>
        </JobDescription>
      </ExperienceBlock>

      <ExperienceBlock
        company='PHZ FullStack'
        position='Senior software engineer'
        startingDate={ dayjs('2017-11-03') }
        endDate={ dayjs('2019-04-19') }
        index={3}
      >
        <JobDescription>
          Working as a consulting fullstack developer specializing in JavaScript
          frontends using ReactJS, JavaScript backends running on NodeJS, and
          Spring-powered Java backends.
          <br/><br/>
          Projects included:
          <ul>
            <li>Development of digital services for Finnish Population Register Centre (Väestörekisterikeskus).
              For example service for changing own first name, service for getting government-issued certificates
              such as life certificate, marriage certificate, residency certificate, etc.
            </li>
            <li>Mobile application for a pilot project aimed at the digitisation
              of services of the biggest indoor adventure park chain in Finland.
            </li>
          </ul>
        </JobDescription>
      </ExperienceBlock>
      <ExperienceBlock
        company='Comptel'
        position='Technical cloud consultant'
        startingDate={ dayjs('2017-01-01') }
        endDate={ dayjs('2017-11-02') }
        index={4}
      >
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
      <ExperienceBlock
        company='Comptel'
        position='Software engineer'
        startingDate={ dayjs('2015-05-10') }
        endDate={ dayjs('2016-12-31') }
        index={5}
      >
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
      <ExperienceBlock
        company='Comptel'
        position='Junior software engineer'
        startingDate={ dayjs('2011-05-02') }
        endDate={ dayjs('2014-12-31') }
        index={6}
      >
        <JobDescription>
          Developed SDK platform that is used by company's
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
    </TimelineContainer>
  </Section>
}
