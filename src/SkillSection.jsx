import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Section, Subsection, Bar } from './components'
import titleImage from './assets/img/wrench.png'

const LanguageList = styled.ul`
  list-style: none;
  padding-left: 0;
  font-family: NexaLight;
  margin-bottom: 2.5rem;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.6rem 0;
    padding-right: 1rem;
    font-size: ${props => props.theme.font.size.medium};

    span {
      width: 8rem;
      font-family: NexaBold;
      color: ${props => props.theme.color.textDark};
    }
  }
`

const TechGrid = styled(motion.div)`
  display: grid;
  gap: 1.5rem;

  ${props => props.theme.media.mobile} {
    grid-template-columns: 1fr;
  }

  ${props => props.theme.media.from.phablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`

const TechBlock = styled(motion.div)`
  background: ${props => props.theme.color.gradientSubtle};
  border-radius: 12px;
  padding: 1.25rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;
    font-family: NexaLight;
    font-size: ${props => props.theme.font.size.medium};

    li {
      padding: 0.3rem 0;
      color: ${props => props.theme.color.textDark};
      position: relative;
      padding-left: 1rem;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        background: ${props => props.theme.color.accent};
        border-radius: 50%;
      }
    }
  }
`

const TechBlockTitle = styled.h3`
  font-family: NexaBold;
  margin: 0 0 0.75rem 0;
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.color.primary};
`

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const blockVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

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
        <LanguageExpertise name='Python' value={70} />
        <LanguageExpertise name='Bash' value={65} />
        <LanguageExpertise name='C' value={60} />
        <LanguageExpertise name='PL/SQL' value={20} />
      </LanguageList>
    </Subsection>
    <Subsection title="Frameworks and technologies">
      <TechGrid
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={gridVariants}
      >
        <TechBlock variants={blockVariants}>
          <TechBlockTitle>Backend</TechBlockTitle>
          <ul>
            <li>Spring</li>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>JPA/Hibernate</li>
            <li>SQL/NoSQL</li>
          </ul>
        </TechBlock>
        <TechBlock variants={blockVariants}>
          <TechBlockTitle>Frontend</TechBlockTitle>
          <ul>
            <li>ReactJS</li>
            <li>Redux</li>
            <li>Vue</li>
            <li>BackboneJS</li>
            <li>HTML5</li>
            <li>CSS/SASS/LESS</li>
          </ul>
        </TechBlock>
        <TechBlock variants={blockVariants}>
          <TechBlockTitle>Testing, CI and DevOps</TechBlockTitle>
          <ul>
            <li>Jenkins</li>
            <li>Robot Framework</li>
            <li>JUnit</li>
            <li>Mocha</li>
            <li>Jasmine</li>
            <li>Cypress</li>
            <li>Terraform</li>
          </ul>
        </TechBlock>
        <TechBlock variants={blockVariants}>
          <TechBlockTitle>Cloud and Distributed systems</TechBlockTitle>
          <ul>
            <li>AWS (EC2, VPC, S3, Route53, DynamoDB, Cognito, CloudFront, IAM and many more)</li>
            <li>Apache Kafka</li>
            <li>Kubernetes</li>
            <li>Docker</li>
          </ul>
        </TechBlock>
      </TechGrid>
    </Subsection>
  </Section>
}
