import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Section, Subsection } from './components'
import titleImage from './assets/img/graduation_cap.png'

const DATE_FORMAT = 'MMM, YYYY'
const EducationBlock = styled.div`
  margin-bottom: 1.5rem;
  font-size: ${props => props.theme.font.size.medium};
`

const EducationTitle = styled.div`
  font-family: 'NexaBold';
  font-size: ${props => props.theme.font.size.mediumLarge};
`

const EducationDetails = styled.div`
  font-family: 'NexaLight';
  font-size: ${props => props.theme.font.size.medium};
`

export const EducationSection = () => {
  const masterStart = moment('2014-05-01')
  const masterEnd = moment('2016-10-31')
  const bachelelorStart = moment('2009-09-01')
  const bachelelorEnd = moment('2014-05-01')
  return <Section image={titleImage} title="Education">
    <EducationBlock>
      <EducationTitle>Master of science (Technology)</EducationTitle>
      <EducationTitle>Computer science</EducationTitle>
      <EducationDetails>{`Aalto University ${masterStart.format(DATE_FORMAT)} - ${masterEnd.format(DATE_FORMAT)}`}</EducationDetails>
      <EducationDetails>Thesis: System monitoring of Virtual Network Functions</EducationDetails>
      <EducationDetails>Major: Cloud computing</EducationDetails>
      <EducationDetails>Minor: Embedded systems</EducationDetails>
    </EducationBlock>
    <EducationBlock>
      <EducationTitle>Bachelor of science (Technology)</EducationTitle>
      <EducationTitle>Computer science</EducationTitle>
      <EducationDetails>{`Aalto University ${bachelelorStart.format(DATE_FORMAT)} - ${bachelelorEnd.format(DATE_FORMAT)}`}</EducationDetails>
      <EducationDetails>Thesis: Methods for maintaining the temporal order in event streams (Tapahtumavirtojen aikajärjestyksen hallintamenetelmät)</EducationDetails>
      <EducationDetails>Major: Software engineering</EducationDetails>
      <EducationDetails>Minor: Data comunications software</EducationDetails>
    </EducationBlock>
  </Section>
}
