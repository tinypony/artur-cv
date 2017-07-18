import Section from './components/section'
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';
import LanguageSkills from './components/languages';
import TechSkills from './components/technologies';
import React from 'react'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'

const CLASSES = {
  CONTENT_WRAPPER: 'text-wrapper animation-wrapper',
  CONTENT_INIT: 'content-init',
  CONTENT_SHOWN: 'content-shown'
}

export default class WhatSection extends React.Component {

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

    return <Section className="section_what">
      <Waypoint onEnter={this.handleWaypointEnter}>
        <div>
          <SectionContent direction="left">
            <SectionMedia className="bars-media">
              <LanguageSkills barWidth={60} barGap={20} />
              <TechSkills />
            </SectionMedia>
            <div className={contentClass}>
              <SectionName text="What" className="appear left opacity"/>
              <p className="page-section_content_text appear bottom opacity">
              This is the list of programming languages and technologies I have experience with
              that are worth mentioning. Also a couple of ones that I dealed with once or twice, but still proud of the results.
              </p>
              <p className="page-section_content_text appear bottom opacity">
              Although many of the things listed here are heavily used in the industry,
              every software project has a unique stack making it impossible to know everything from the day one.
              Therefore my main skill remains the same — it is the ability to learn new things and adapt to ever changing technology landscape.
              </p>
            </div>
          </SectionContent>
        </div>
      </Waypoint>
    </Section>
  }
}
