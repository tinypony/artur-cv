import React, {PureComponent} from 'react'
import styled from 'styled-components'
import moment from 'moment'
import Section from './components/section/Section.react'
import head from './assets/img/head.png'

const ContenWrapper = styled.div`
  position: relative;
  display: flex;

  ${props => props.theme.media.desktop} {
      flex-direction: row;
      padding-top: 4rem;
      padding-bottom: 5rem;
  }

  ${props => props.theme.media.upTo.desktop} {
      flex-direction: column;
      align-items: center;
      padding-top: 1rem;
  }
`

const HeadImage = styled.img`
  border-radius: 250px;

  ${props => props.theme.media.desktop} {
    position: absolute;
    left: -10rem;
    padding: 1rem;
    background-color: white;
    width: 250px;
  }

  ${props => props.theme.media.upTo.desktop} {
    padding: 1rem;
    background-color: white;
    width: 180px;
  }
`

const MainTitle = styled.h1`
  font-family: NexaBold;
  font-size: 3rem;

  ${props => props.theme.media.upTo.desktop} {
    text-align: center;
    font-size: 2rem;
  }
`

const HeadSectionTextContent = styled.div`
  ${props => props.theme.media.desktop} {
    margin-left: 200px;
  }

  ${props => props.theme.media.upTo.tablet} {
    width: 100%;
  }
`

const InfoTable = styled.div`
  ${props => props.theme.media.upTo.desktop} {
    font-size: 0.9rem;
  }
`

const InfoTableRow = styled.div`
  display: flex;

  ${props => props.theme.media.from.tablet} {
    flex-direction: row;
  }

  ${props => props.theme.media.upTo.tablet} {
    flex-direction: column;
    margin-bottom: 0.5rem;
  }
`

const InfoTitle = styled.div`
  width: 5.5rem;
  text-align: right;
  font-family: NexaLight;

  ${props => props.theme.media.upTo.tablet} {
    text-align: left;
    font-family: NexaBold;
  }
`

const InfoPayload = styled.div`
  font-family: NexaBold;

  ${props => props.theme.media.from.tablet} {
    margin-left: 1rem;
  }

  ${props => props.theme.media.upTo.tablet} {
    font-family: NexaLight;
  }
`

const LinkedInLink = styled.a`
  color: #30c0d2;
  &:visited {
    color: #30c0d2;
  }
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
        <HeadImage src={head} />
        <HeadSectionTextContent>
          <MainTitle>Artur Latypov</MainTitle>
          <InfoTable>
            <InfoTableRow>
              <InfoTitle>Degree</InfoTitle>
              <InfoPayload>MSc (Tech.) in Software Engineering</InfoPayload>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>Experience</InfoTitle>
              <InfoPayload>{`${durationYears} years ${durationMonths} months`}</InfoPayload>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>Mobile</InfoTitle>
              <InfoPayload>+358451195095</InfoPayload>
            </InfoTableRow>
            <InfoTableRow>
              <InfoTitle>LinkedIn</InfoTitle>
              <InfoPayload>
                <LinkedInLink href='https://www.linkedin.com/in/arturlatypov/'>
                  https://linkedin.com/in/arturlatypov/
                </LinkedInLink>
              </InfoPayload>
            </InfoTableRow>
          </InfoTable>
        </HeadSectionTextContent>
      </ContenWrapper>
    </Section>
  }
}
