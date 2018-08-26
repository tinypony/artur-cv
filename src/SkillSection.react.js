import React, {PureComponent} from 'react'
import styled from 'styled-components'
import Section from './components/section/Section.react'
import Subsection from './components/section/Subsection.react'
import Bar from './components/bar/Bar.react'
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
  }
`

const TechBlockTitle = styled.h3`
  font-family: NexaBold;
  margin-top: 0;
  margin-bottom: 0.2rem;

  ${props => props.theme.media.upTo.tablet} {
    font-size: 1rem;
  }

  ${props => props.theme.media.from.tablet} {
    font-size: 1.1rem;
  }
`

export default class SkillSection extends PureComponent {
  render() {
    return <Section image={titleImage} title="Skills">
      <Subsection title="Languages">
        <LanguageList>
          <li><span>Java</span><Bar value={90} /></li>
          <li><span>JavaScript</span><Bar value={90} /></li>
          <li><span>Python</span><Bar value={70} /> </li>
          <li><span>C</span><Bar value={60} /></li>
          <li><span>Bash</span><Bar value={60} /></li>
          <li><span>PL/SQL</span><Bar value={20} /></li>
          <li><span>Assembly</span><Bar value={10} /></li>
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
              <li>Docker</li>
            </ul>
          </TechBlock>
        </TechGrid>
      </Subsection>
    </Section>
  }
}
