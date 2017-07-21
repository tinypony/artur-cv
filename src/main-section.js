import Section from './components/section.js'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import _ from 'lodash'
import classNames from 'classnames'
import '../styles/main-section.scss'

const PARALLAX_SCROLL = 'parallax'

export default class MainSection extends React.Component {

  constructor(props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      textTopOffset: 0,
      pictureOpacity: 1
    }
  }

  handleScroll(event) {
    const domNode = ReactDOM.findDOMNode(this.background)
    const boundingRect = domNode.getBoundingClientRect()
    const opacity = _.max([0, 1 + (boundingRect.top / boundingRect.height)]);
    const textOffset = _.min([boundingRect.top/3, 0])
    this.setState({ textTopOffset: textOffset, pictureOpacity: opacity });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render() {
    return <div className="main-section-wrapper">
      <div className="dark-background" />
      <div className="picture-background" style={{opacity: this.state.pictureOpacity}} ref={(div) => this.background = div} />
      <div className="artur-main">
        <div className="in-your-face" style={{top: this.state.textTopOffset}}>
          <div className="first-row">It is</div>
          <div className="second-row">
            <div className="my-name">Artur</div>
            <div className="my-lastname">Latypov</div>
          </div>
          <div className="third-row">Who? What? Where?</div>
        </div>
      </div>
    </div>
  }
}

MainSection.propTypes = {
  scrollStyle: PropTypes.oneOf([PARALLAX_SCROLL, 'fixed'])
}

MainSection.defaultProps = {
  scrollStyle: PARALLAX_SCROLL
}
