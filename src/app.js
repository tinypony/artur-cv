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

import '../styles/index.scss';

export default class App extends React.Component {
  render() {

    return (
      <div>
        <MainSection />
        <div className="sections">
          <WhoSection />
          <WhatSection />
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
