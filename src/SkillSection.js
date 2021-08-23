import React from 'react'
import styled from 'styled-components'
import { Section, Subsection, Bar } from './components'
import titleImage from './assets/img/wrench.png'

const LanguageList = styled.ul`
  list-style: none;
  padding-left: 0px;
  font-family: NexaLight;
  margin-bottom: 2rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.4rem 0;
    padding-right: 1rem;
    font-size: ${props => props.theme.font.size.medium};

    span {
      width: 8rem;
    }
  }
`

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props => props.theme.media.mobile} {
    flex-direction: column;
  }

  ${props => props.theme.media.from.phablet} {
    flex-direction: row;
  }
`
const TechBlock = styled.div`
  ${props => props.theme.media.mobile} {
    width: 100%;
  }

  ${props => props.theme.media.from.phablet} {
    width: 50%;
  }

  ul {
    margin-top: 0.2rem;
    list-style: none;
    padding-left: 0px;
    font-family: NexaLight;
    font-size: ${props => props.theme.font.size.medium};
  }
`

const TechBlockTitle = styled.h3`
  font-family: NexaBold;
  margin-top: 0;
  margin-bottom: 0.2rem;

  font-size: ${props => props.theme.font.size.mediumLarge};
`

const LanguageExpertise = ({ name, value }) => <li>
  <span>{name}</span>
  <Bar value={value} />
</li>

export const SkillSection = () => {
  return <Section image={titleImage} title="Skills">
    <Subsection title="Languages">
      <LanguageList>
        <LanguageExpertise name='JavaScript' value={100} />
        <LanguageExpertise name='Java' value={85} />
        <LanguageExpertise name='Bash' value={85} />
        <LanguageExpertise name='Python' value={70} />
        <LanguageExpertise name='C' value={60} />
        <LanguageExpertise name='PL/SQL' value={20} />
      </LanguageList>
    </Subsection>
    <Subsection title="Frameworks and technologies">
      <TechGrid>
        <TechBlock>
          <TechBlockTitle>Backend</TechBlockTitle>
          <ul>
            <li>Spring</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>Django</li>
            <li>JPA/Hibernate</li>
            <li>SQL/NoSQL</li>
          </ul>
        </TechBlock>
        <TechBlock>
          <TechBlockTitle>Frontend</TechBlockTitle>
          <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Angular</li>
            <li>BackboneJS</li>
            <li>HTML5</li>
            <li>CSS/SASS/LESS</li>
          </ul>
        </TechBlock>
        <TechBlock>
          <TechBlockTitle>Testing, CI and DevOps</TechBlockTitle>
          <ul>
            <li>Jenkins</li>
            <li>Robot Framework</li>
            <li>JUnit</li>
            <li>Mocha</li>
            <li>Jasmine</li>
            <li>Cypress</li>
            <li>Ansible</li>
            <li>Terraform</li>
          </ul>
        </TechBlock>
        <TechBlock>
          <TechBlockTitle>Cloud and Distributed systems</TechBlockTitle>
          <ul>
            <li>AWS (EC2, S3, DynamoDB, Cognito, CloudFront, IAM and many more)</li>
            <li>OpenStack</li>
            <li>Apache Kafka</li>
            <li>ElasticSearch</li>
            <li>Mesos</li>
            <li>Docker</li>
          </ul>
        </TechBlock>
      </TechGrid>
    </Subsection>
  </Section>
}
