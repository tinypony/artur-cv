import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.div`
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

  img {
    position: relative;
    top: 0.25rem;
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
    background-color: ${props => props.theme.color.leftPadBackground};
    text-align: end;
    font-size: ${props => props.theme.font.size.large};
    box-shadow: -14px 0px 15px -15px rgba(0,0,0,0.2) inset;
  }

  ${props => props.theme.media.upTo.desktop} {
    font-size: ${props => props.theme.font.size.mediumLarge};
  }
`

const SectionTitle = styled.div`
  flex-grow: 1;
  font-family: Raleway;
  font-size: 1.4rem;
  text-align: start;
  border-bottom: 1px solid ${props => props.theme.color.textDark};
  margin-left: 0.5rem;
  padding: 0 3rem 0 0.5rem;

  &:empty {
    border: none;
  }
`

const SectionContent = styled.div`
  background-color: white;
  font-size: ${props => props.theme.font.size.small};

  ${props => props.theme.media.desktop} {
    width: 75%;
    padding: 0 1.5rem;
    margin-bottom: 2.5rem;
    margin-top: 1rem;
  }

  ${props => props.theme.media.upTo.desktop} {
    padding: 0 0.5rem;
    margin-bottom: 1rem;
    margin-top: 0.5rem;
  }
`

const SubsectionTitle = styled.h2`
  margin-top: 0;
  font-family: NexaBold;
  font-size: ${props => props.theme.font.size.large};
`

export const Subsection = ({title, children}) => {
  return <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    {children}
  </div>
}


export const Section = ({ title, image, children }) => {
  return <StyledSection>
    <SectionTitleBody>
      <SectionTitleWrapper>
        { image ? <img src={image} width={60} /> : null }
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
