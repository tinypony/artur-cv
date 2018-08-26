import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.div`
  width: 100%;
  display: flex;

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
    font-size: 1.4rem;
  }

  ${props => props.theme.media.upTo.desktop} {
    font-size: 1.1rem;
  }
`

const SectionTitle = styled.div`
  font-family: Raleway;
  font-size: 1.4rem;
  text-align: end;
  border-bottom: 1px solid ${props => props.theme.color.textDark};
  margin-left: 0.5rem;
  padding: 0 3rem 0 0.5rem;

  &:empty {
    border: none;
  }
`

const SectionContent = styled.div`
  background-color: white;

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

export default class Section extends PureComponent {
  render() {
    return <StyledSection>
      <SectionTitleBody>
        <SectionTitleWrapper>
          {this.props.image ? <img src={this.props.image} width={60} /> : null}
          <SectionTitle>{this.props.title || ''}</SectionTitle>
        </SectionTitleWrapper>
      </SectionTitleBody>
      <SectionContent>{this.props.children}</SectionContent>
    </StyledSection>
  }
}

Section.propTypes = {
  image: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.node
}
