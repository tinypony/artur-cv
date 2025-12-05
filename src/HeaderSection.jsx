import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { Section } from './components'
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

const HeadImage = styled.div`
  border-radius: 16rem;
  background-color: white;
  padding: 1rem;
  overflow: hidden;

  ${props => props.theme.media.desktop} {
    position: absolute;
    left: -10rem;
  }

  img {
    width: 16rem;
    border-radius: 16rem;
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
  font-size: ${props => props.theme.font.size.medium};
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
  width: 6rem;
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
  text-decoration: none;
  
  &:visited {
    color: #30c0d2;
  }
`

export const HeaderSection = () => {
  const startingDate = moment('2011-05-01')
  const currentDate = moment()
  const duration = moment.duration(currentDate.diff(startingDate))
  const durationYears = duration.years()
  const durationMonths = duration.months()
  return <Section>
    <ContenWrapper>
      <HeadImage>
        <img src={head} />
      </HeadImage>
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
