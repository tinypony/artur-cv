import React from 'react';
import MainSection from './main-section';
import Section from './components/section';
import SectionName from './components/section/section-name';
import SectionContent from './components/section/section-content';
import SectionMedia from './components/section/section-media';

import WhoSection from './who-section'
import WhatSection from './what-section'
import HowSection from './how-section'
import WhereSection from './where-section'
import PropTypes from 'prop-types'
import Constant from './util/constant'
import '../styles/index.scss';

export default class App extends React.Component {
  render() {
    console.log('App screen ' + this.props.screenType);
    return (
      <div>
        <MainSection />
        <div className="sections">
          <WhoSection screenType={this.props.screenType} />
          <WhatSection screenType={this.props.screenType} />
          <HowSection />
          <WhereSection />
        </div>
        <div className='contact-details'>
          <p className='call-to-action'>What's your call?</p>
          <div className="contact linkedin-contact">
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <a href="https://www.linkedin.com/in/arturlatypov/">Artur Latypov</a>
          </div>
          <div className="contact gmail-contact">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
            <a>zufers [at] gmail.com</a>
          </div>
          <div className="contact skype-contact">
            <i className="fa fa-skype" aria-hidden="true"></i>
            tinypony008
          </div>
        </div>
      </div>
    )
  }
}


App.propTypes = {
  screenType: PropTypes.oneOf([Constant.SCREEN_TYPE.MOBILE, Constant.SCREEN_TYPE.LARGE])
}

App.defaultProps = {
  screenType: Constant.SCREEN_TYPE.LARGE
}
