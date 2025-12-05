import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'

const StyledSection = styled(motion.div)`
  width: 100%;
  display: flex;

  ${props => props.theme.media.print},
  ${props => props.theme.media.desktop} {
    flex-direction: row;
  }

  ${props => props.theme.media.upTo.desktop} {
    flex-direction: column;
  }
`
const SectionTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 0.75rem;

  img {
    position: relative;
    top: 0.25rem;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }

  ${props => props.theme.media.print},
  ${props => props.theme.media.desktop} {
    justify-content: end;
  }

  ${props => props.theme.media.upTo.desktop} {
    justify-content: start;
  }
`

const SectionTitleBody = styled.div`
  font-family: Raleway;

  ${props => props.theme.media.desktop} {
    width: 25%;
    background: ${props => props.theme.color.leftPadBackground};
    text-align: end;
    font-size: ${props => props.theme.font.size.large};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      width: 0px;
      background: ${props => props.theme.color.gradient};
    }
  }

  ${props => props.theme.media.upTo.desktop} {
    font-size: ${props => props.theme.font.size.mediumLarge};
  }
`

const SectionTitle = styled.div`
  font-family: NexaBold;
  font-size: 1.3rem;
  text-align: start;
  margin-left: 0.5rem;
  padding: 0 2rem 0.5rem 0.5rem;
  width: 9rem;
  color: ${props => props.theme.color.textDark};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.5rem;
    right: 3rem;
    height: 2px;
    background: ${props => props.theme.color.gradient};
    border-radius: 1px;
  }

  &:empty {
    &::after {
      display: none;
    }
  }
`

const SectionContent = styled.div`
  background-color: white;
  font-size: ${props => props.theme.font.size.small};

  ${props => props.theme.media.desktop} {
    width: 75%;
    padding: 0 2rem;
    margin-bottom: 2.5rem;
    margin-top: 1.25rem;
  }

  ${props => props.theme.media.upTo.desktop} {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    margin-top: 0.75rem;
  }
`

const SubsectionTitle = styled(motion.h2)`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: NexaBold;
  font-size: ${props => props.theme.font.size.large};
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
    height: 70%;
    background: ${props => props.theme.color.accent};
    border-radius: 2px;
  }
`

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const subsectionVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' }
  }
}

export const Subsection = ({title, children}) => {
  return <div>
    <SubsectionTitle
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={subsectionVariants}
    >
      {title}
    </SubsectionTitle>
    {children}
  </div>
}


export const Section = ({ title, image, children }) => {
  return <StyledSection
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={sectionVariants}
  >
    <SectionTitleBody>
      <SectionTitleWrapper>
        { image ? <img src={image} width={60} alt="" /> : null }
        <SectionTitle>{ title || '' }</SectionTitle>
      </SectionTitleWrapper>
    </SectionTitleBody>
    <SectionContent>{ children }</SectionContent>
  </StyledSection>
}

Section.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.node
}
