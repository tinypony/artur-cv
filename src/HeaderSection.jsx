import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { motion } from 'framer-motion'
import { Section } from './components'
import head from './assets/img/head.png'

dayjs.extend(duration)

const ContenWrapper = styled.div`
  position: relative;
  display: flex;

  ${props => props.theme.media.desktop} {
      flex-direction: row;
      padding-top: 3rem;
      padding-bottom: 4rem;
  }

  ${props => props.theme.media.upTo.desktop} {
      flex-direction: column;
      align-items: center;
      padding-top: 1.5rem;
  }
`

const HeadImage = styled.div`
  border-radius: 50%;
  background: ${props => props.theme.color.gradient};
  padding: 4px;
  overflow: hidden;
  box-shadow:
    0 10px 25px -5px rgba(99, 102, 241, 0.3),
    0 8px 10px -6px rgba(99, 102, 241, 0.2);

  ${props => props.theme.media.desktop} {
    position: absolute;
    left: -9rem;
  }

  img {
    width: 14rem;
    border-radius: 50%;
    display: block;
  }
`

const MainTitle = styled.h1`
  font-family: NexaBold;
  font-size: 2.75rem;
  margin: 0 0 0.5rem 0;
  background: ${props => props.theme.color.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ${props => props.theme.media.upTo.desktop} {
    text-align: center;
    font-size: 2rem;
    margin-top: 1rem;
  }
`

const Tagline = styled.p`
  font-family: NexaLight;
  font-size: 1.1rem;
  color: ${props => props.theme.color.textMuted};
  margin: 0 0 1.5rem 0;

  ${props => props.theme.media.upTo.desktop} {
    text-align: center;
  }
`

const HeadSectionTextContent = styled.div`
  ${props => props.theme.media.desktop} {
    margin-left: 180px;
  }

  ${props => props.theme.media.upTo.tablet} {
    width: 100%;
  }
`

const InfoTable = styled.div`
  font-size: ${props => props.theme.font.size.medium};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const InfoTableRow = styled.div`
  display: flex;
  align-items: center;

  ${props => props.theme.media.from.tablet} {
    flex-direction: row;
  }

  ${props => props.theme.media.upTo.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.5rem 0;
    border-bottom: 1px solid ${props => props.theme.color.background};
  }
`

const InfoTitle = styled.div`
  width: 7rem;
  text-align: right;
  font-family: NexaBold;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${props => props.theme.color.textMuted};

  ${props => props.theme.media.upTo.tablet} {
    text-align: left;
    margin-bottom: 0.25rem;
  }
`

const InfoPayload = styled.div`
  font-family: NexaLight;
  color: ${props => props.theme.color.textDark};

  ${props => props.theme.media.from.tablet} {
    margin-left: 1.25rem;
  }
`

const LinkedInLink = styled.a`
  color: ${props => props.theme.color.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${props => props.theme.color.primaryDark};
    text-decoration: underline;
  }

  &:visited {
    color: ${props => props.theme.color.primary};
  }
`

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.2, ease: 'easeOut' }
  }
}

const taglineVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.35, ease: 'easeOut' }
  }
}

const infoTableVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5
    }
  }
}

const infoRowVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const HeaderSection = () => {
  const startingDate = dayjs('2011-05-01')
  const currentDate = dayjs()
  const duration = dayjs.duration(currentDate.diff(startingDate))
  const durationYears = duration.years()
  const durationMonths = duration.months()
  return <Section>
    <ContenWrapper>
      <HeadImage
        initial="hidden"
        animate="visible"
        variants={imageVariants}
      >
        <img src={head} alt="Artur Latypov" />
      </HeadImage>
      <HeadSectionTextContent>
        <MainTitle
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          Artur Latypov
        </MainTitle>
        <Tagline
          initial="hidden"
          animate="visible"
          variants={taglineVariants}
        >
          Senior Full-Stack Developer & Cloud Architect
        </Tagline>
        <InfoTable
          initial="hidden"
          animate="visible"
          variants={infoTableVariants}
        >
          <InfoTableRow variants={infoRowVariants}>
            <InfoTitle>Degree</InfoTitle>
            <InfoPayload>MSc (Tech.) in Software Engineering</InfoPayload>
          </InfoTableRow>
          <InfoTableRow variants={infoRowVariants}>
            <InfoTitle>Experience</InfoTitle>
            <InfoPayload>{`${durationYears} years ${durationMonths} months`} (11 years pre-LLM)</InfoPayload>
          </InfoTableRow>
          <InfoTableRow variants={infoRowVariants}>
            <InfoTitle>Mobile</InfoTitle>
            <InfoPayload>+358451195095</InfoPayload>
          </InfoTableRow>
          <InfoTableRow variants={infoRowVariants}>
            <InfoTitle>LinkedIn</InfoTitle>
            <InfoPayload>
              <LinkedInLink href='https://www.linkedin.com/in/arturlatypov/'>
                linkedin.com/in/arturlatypov
              </LinkedInLink>
            </InfoPayload>
          </InfoTableRow>
        </InfoTable>
      </HeadSectionTextContent>
    </ContenWrapper>
  </Section>
}
