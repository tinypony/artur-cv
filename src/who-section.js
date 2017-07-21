import Section from './components/section'
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import InstagramOne from '../styles/img/insta_1.png'
import InstagramTwo from '../styles/img/insta_2.png'
import Pack from './components/pack'
import classNames from 'classnames'
import Constant from './util/constant'
import './who-section.scss'

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

  render() {
    const contentClass = classNames(CLASSES.TEXT_CONTENT_WRAPPER, this.state.contentClass)
    const mediaContentClass = classNames(CLASSES.MEDIA_CONTENT_WRAPPER, this.state.contentClass)
    const paragraphClass = 'page-section_content_text appear bottom opacity';

    let pack;

    if(this.props.screenType === Constant.SCREEN_TYPE.LARGE) {
      pack = <Pack className="who-pack" pictures={[InstagramOne, InstagramTwo]} />
    } else {
      pack = <Pack className="who-pack" isMobile pictures={[InstagramOne, InstagramTwo]} />
    }

    return <Section className="section_who">
      <SectionContent direction="right">
        <Waypoint onEnter={this.handleWaypointEnter} />
        <SectionMedia className="who-section_media">
          {
            pack
          }
        </SectionMedia>
        <div className={contentClass}>
          <SectionName text="Who" className='appear right opacity'/>
          <p className={paragraphClass}>My name is Artur and I am a software engineer,
          which is a sophisticated name for a programmer.</p>
          <p className={paragraphClass}>
          I've got Master's degree in computer science with Cloud computing as my major in Aalto University (former Helsinki University of Technology) and
          am ready to take up on new challeges.</p>
          <p className={paragraphClass}>
          I am passionate about coding and love to learn new languages and technologies, I am curious about the entire stack instead of only front-end or back-end. In other words I am not a prisoner of my job title.
          </p>
          <p className={paragraphClass}>
          Outside of work I am an outgoing person who loves to hit the road, meet new people and be awesome.
          </p>
        </div>
      </SectionContent>
    </Section>
  }
}

WhoSection.propTypes = {
  screenType: PropTypes.oneOf([Constant.SCREEN_TYPE.MOBILE, Constant.SCREEN_TYPE.LARGE])
}

WhoSection.defaultProps = {
  screenType: Constant.SCREEN_TYPE.MOBILE
}
