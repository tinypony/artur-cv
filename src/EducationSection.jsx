import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { Section } from './components'
import titleImage from './assets/img/graduation_cap.png'

const DATE_FORMAT = 'MMM, YYYY'

const EducationBlock = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${props => props.theme.color.gradientSubtle};
  border-radius: 12px;
  border-left: 4px solid ${props => props.theme.color.primary};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

const EducationTitle = styled.div`
  font-family: 'NexaBold';
  font-size: ${props => props.theme.font.size.mediumLarge};
  color: ${props => props.theme.color.textDark};
  margin-bottom: 0.25rem;
`

const EducationSubtitle = styled.div`
  font-family: 'NexaBold';
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.color.primary};
  margin-bottom: 0.75rem;
`

const EducationDetails = styled.div`
  font-family: 'NexaLight';
  font-size: ${props => props.theme.font.size.medium};
  color: ${props => props.theme.color.textMuted};
  margin-top: 0.25rem;
`

const EducationDate = styled.div`
  font-family: 'NexaLight';
  font-size: ${props => props.theme.font.size.small};
  color: ${props => props.theme.color.textLight};
  margin-bottom: 0.5rem;
`

const educationVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

export const EducationSection = () => {
  const masterStart = dayjs('2014-05-01')
  const masterEnd = dayjs('2016-10-31')
  const bachelelorStart = dayjs('2009-09-01')
  const bachelelorEnd = dayjs('2014-05-01')
  return <Section image={titleImage} title="Education">
    <EducationBlock
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={educationVariants}
    >
      <EducationTitle>Master of Science (Technology)</EducationTitle>
      <EducationSubtitle>Computer Science</EducationSubtitle>
      <EducationDate>Aalto University • {masterStart.format(DATE_FORMAT)} - {masterEnd.format(DATE_FORMAT)}</EducationDate>
      <EducationDetails>Thesis: System monitoring of Virtual Network Functions</EducationDetails>
      <EducationDetails>Major: Cloud computing • Minor: Embedded systems</EducationDetails>
    </EducationBlock>
    <EducationBlock
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={educationVariants}
      transition={{ delay: 0.15 }}
    >
      <EducationTitle>Bachelor of Science (Technology)</EducationTitle>
      <EducationSubtitle>Computer Science</EducationSubtitle>
      <EducationDate>Aalto University • {bachelelorStart.format(DATE_FORMAT)} - {bachelelorEnd.format(DATE_FORMAT)}</EducationDate>
      <EducationDetails>Thesis: Methods for maintaining the temporal order in event streams</EducationDetails>
      <EducationDetails>Major: Software engineering • Minor: Data communications software</EducationDetails>
    </EducationBlock>
  </Section>
}
