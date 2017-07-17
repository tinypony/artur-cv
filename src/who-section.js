import Section from './components/section'
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';
import React from 'react'
import ReactDOM from 'react-dom'
import Waypoint from 'react-waypoint'
import ManImg from '../styles/img/standing.png';
import InstagramOne from '../styles/img/insta_1.png'
import InstagramTwo from '../styles/img/insta_2.png'
import Pack from './components/pack'
import classNames from 'classnames'
import './who_section.scss'

const CLASSES = {
  MEDIA_CONTENT_WRAPPER: 'animation-wrapper',
  TEXT_CONTENT_WRAPPER: 'text-wrapper animation-wrapper',
  CONTENT_INIT: 'content-init',
  CONTENT_SHOWN: 'content-shown'
}

export default class WhoSection extends React.Component {

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

  handlePictureClick(arg1) {
    console.log(arg1.target)
  }

  render() {
    const contentClass = classNames(CLASSES.TEXT_CONTENT_WRAPPER, this.state.contentClass)
    const mediaContentClass = classNames(CLASSES.MEDIA_CONTENT_WRAPPER, this.state.contentClass)

    return <Section className="section_who">
      <SectionContent direction="right">
        <Waypoint onEnter={this.handleWaypointEnter} />
        <SectionMedia className="who-section_media">
          <Pack className="who-pack" pictures={[InstagramOne, InstagramTwo]} />
        </SectionMedia>
        <div className={contentClass}>
          <SectionName text="Who" className='appear right opacity'/>
          <p className="page-section_content_text appear bottom opacity">My name is Artur and I am a software engineer,
          which is a sophisticated name for a programmer.</p>
          <p className="page-section_content_text appear bottom opacity">
          I've got Master's degree in Software Engineering in Aalto University and
          am ready to take up on new challeges.</p>
        </div>
      </SectionContent>
    </Section>
  }
}
