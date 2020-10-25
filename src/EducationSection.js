import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Section, Subsection } from './components'
import titleImage from './assets/img/graduation_cap.png'

const DATE_FORMAT = 'MMM, YYYY'
const EducationBlock = styled.div`
  margin-bottom: 1.5rem;
`
const EducationRowBold = styled.div`
  font-family: 'NexaBold';
`
const EducationRowLight = styled.div`
  font-family: 'NexaLight';
`

const EducationRow = ({bold, children}) => {
  return bold
    ? <EducationRowBold>{children}</EducationRowBold>
    : <EducationRowLight>{children}</EducationRowLight>
}

export const EducationSection = () => {
  const masterStart = moment('2014-05-01')
  const masterEnd = moment('2016-10-31')
  const bachelelorStart = moment('2009-09-01')
  const bachelelorEnd = moment('2014-05-01')
  return <Section image={titleImage} title="Education">
    <EducationBlock>
      <EducationRow bold>Master of science (Technology)</EducationRow>
      <EducationRow bold>Computer science</EducationRow>
      <EducationRow>{`Aalto University ${masterStart.format(DATE_FORMAT)} - ${masterEnd.format(DATE_FORMAT)}`}</EducationRow>
      <EducationRow>Thesis: System monitoring of Virtual Network Functions</EducationRow>
      <EducationRow>Major: Cloud computing</EducationRow>
      <EducationRow>Minor: Embedded systems</EducationRow>
    </EducationBlock>
    <EducationBlock>
      <EducationRow bold>Bachelor of science (Technology)</EducationRow>
      <EducationRow bold>Computer science</EducationRow>
      <EducationRow>{`Aalto University ${bachelelorStart.format(DATE_FORMAT)} - ${bachelelorEnd.format(DATE_FORMAT)}`}</EducationRow>
      <EducationRow>Thesis: Methods for maintaining the temporal order in event streams (Tapahtumavirtojen aikajärjestyksen hallintamenetelmät)</EducationRow>
      <EducationRow>Major: Software engineering</EducationRow>
      <EducationRow>Minor: Data comunications software</EducationRow>
    </EducationBlock>
  </Section>
}
