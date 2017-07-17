import Section from './components/section'
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';
import React from 'react'
import Waypoint from 'react-waypoint'
import ArchitectureImg from '../styles/img/architecture.png';
import classNames from 'classnames'

const CLASSES = {
  CONTENT_WRAPPER: 'animation-wrapper',
  CONTENT_INIT: 'content-init',
  CONTENT_SHOWN: 'content-shown'
}

export default class HowSection extends React.Component {

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

    return <Section className="section_how">
      <Waypoint onEnter={this.handleWaypointEnter}>
        <div>
          <SectionContent direction="right" className={contentClass}>
            <SectionMedia className="appear left opacity">
              <img className="aws_pic" src={ArchitectureImg} />
            </SectionMedia>
            <div className="text-wrapper appear right opacity">
              <SectionName text="How" />
              <p className="page-section_content_text">I have experience working in small and mid-sized agile teams using Scrum and Scaled Agile Framework (SAFe)</p>
              <p className="page-section_content_text">When it comes to technology I have plethora of ways to have things done. This particular page of mine
              is written using ReactJS with D3.js for data visualization, packaged using webpack and statically hosted in AWS S3 with CloudFront CDN sitting in front of it.</p>
            </div>
          </SectionContent>
        </div>
      </Waypoint>
    </Section>
  }
}
