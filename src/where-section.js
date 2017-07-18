import Section from './components/section'
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';
import React from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import Map from './components/map'

const CLASSES = {
  CONTENT_WRAPPER: 'animation-wrapper',
  CONTENT_INIT: 'content-init',
  CONTENT_SHOWN: 'content-shown'
}

export default class WhereSection extends React.Component {

  constructor(props) {
    super(props)
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.state = {
      contentClass: CLASSES.CONTENT_INIT
    }
  }

  handleWaypointEnter() {
    this.setState({
      contentClass: CLASSES.CONTENT_SHOWN
    });
  }

  render() {
    const contentClass = classNames(CLASSES.CONTENT_WRAPPER, this.state.contentClass)

    return <Section className="section_where">
      <SectionContent direction="left">
        <SectionMedia>
          <Map />
        </SectionMedia>
        <div className="text-wrapper">
          <SectionName text="Where" />
          <p className="page-section_content_text">
          I live in Helsinki, but in the current ever shrinking world does it matter?
          I think not, especially taking into the account the fact that I am willing to go anywhere on this planet
          to work on the most interesting and amazing projects.</p>
          <p className="page-section_content_text"></p>
        </div>
      </SectionContent>
    </Section>
  }
}
