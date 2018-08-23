import React, {PureComponent} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Section from './components/section/Section.react'
import head from './assets/img/head.png'

const MainTitle = styled.h1`
  font-family: NexaBold;
  font-size: 3rem;
`

const ContenWrapper = styled.div`
  padding-top: 4rem;
  padding-bottom: 5rem;
  position: relative;
  display: flex;
`
const InfoWrapper = styled.div`
`

const InfoRow = styled.div`
  display: flex
`

const TextWrapper = styled.div`
  margin-left: 200px;
`

const InfoTitle = styled.div`
  width: 5rem;
  text-align: right;
  font-family: NexaLight;
`

const InfoPayload = styled.div`
  margin-left: 1rem;
  font-family: NexaBold;
`
const HeadImage = styled.img`
  position: absolute;
  left: -10rem;
  padding: 1rem;
  border-radius: 250px;
  background-color: white;
`

export default class HeaderSection extends PureComponent {
  render() {
    const startingDate = moment('2011-05-01')
    const currentDate = moment()
    const duration = moment.duration(currentDate.diff(startingDate))
    const durationYears = duration.years()
    const durationMonths = duration.months()
    return <Section>
      <ContenWrapper>
        <HeadImage src={head} width="250"/>
        <TextWrapper>
          <MainTitle>Artur Latypov</MainTitle>
          <InfoWrapper>
            <InfoRow>
              <InfoTitle>Degree</InfoTitle>
              <InfoPayload>MSc (Tech.) in Software Engineering</InfoPayload>
            </InfoRow>
            <InfoRow>
              <InfoTitle>Experience</InfoTitle>
              <InfoPayload>{`${durationYears} years ${durationMonths} months`}</InfoPayload>
            </InfoRow>
            <InfoRow>
              <InfoTitle>Mobile</InfoTitle>
              <InfoPayload>+358451195095</InfoPayload>
            </InfoRow>
            <InfoRow>
              <InfoTitle>LinkedIn</InfoTitle>
              <InfoPayload>
                <a href='https://www.linkedin.com/in/arturlatypov/'>
                  https://www.linkedin.com/in/arturlatypov/
                </a>
              </InfoPayload>
            </InfoRow>
          </InfoWrapper>
        </TextWrapper>
      </ContenWrapper>
    </Section>
  }
}
