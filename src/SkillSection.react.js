import React, {PureComponent} from 'react'
import styled from 'styled-components'
import Section from './components/section/Section.react'
import Subsection from './components/section/Subsection.react'
import titleImage from './assets/img/wrench.png'

const LanguageList = styled.ul`
  list-style: none;
  padding-left: 0px;
  font-family: NexaLight;
`

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`
const TechBlock = styled.div`
  width: 50%;

  ul {
    list-style: none;
    padding-left: 0px;
    font-family: NexaLight;
  }
`

const TechBlockTitle = styled.h3`
  font-size: 1.1rem;
  font-family: NexaBold;
  margin-top: 0;
`

export default class SkillSection extends PureComponent {
  render() {
    return <Section image={titleImage} title="Skills">
      <Subsection title="Languages">
        <LanguageList>
          <li>Java</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>C</li>
          <li>Bash</li>
        </LanguageList>
      </Subsection>
      <Subsection title="Frameworks and technulogies">
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
              <li>Ansible</li>
              <li>Terraform</li>
            </ul>
          </TechBlock>
          <TechBlock>
            <TechBlockTitle>Cloud and Distributed systems</TechBlockTitle>
            <ul>
              <li>AWS</li>
              <li>OpenStack</li>
              <li>Apache Kafka</li>
              <li>ElasticSearch</li>
              <li>Mesos</li>
              <li>Dcoker</li>
            </ul>
          </TechBlock>
        </TechGrid>
      </Subsection>
    </Section>
  }
}
