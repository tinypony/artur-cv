import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledSection = styled.div`
  width: 100%;
  display: flex;
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
`

const SectionTitleBody = styled.div`
  width: 25%;
  background-color: #efeeed;
  font-family: Raleway;
  font-size: 1.4rem;
  text-align: end;
`

const SectionTitle = styled.div`
  font-family: Raleway;
  font-size: 1.4rem;
  text-align: end;
  border-bottom: 1px solid #393939;
  margin-left: 0.5rem;
  padding: 0 3rem 0 0.5rem;

  &:empty {
    border: none;
  }
`

const SectionContent = styled.div`
  width: 75%;
  background-color: white;
  padding: 0 1.5rem;
  margin-bottom: 2.5rem;
  margin-top: 1rem;
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
