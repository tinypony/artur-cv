import React from 'react'
import PropTypes from 'prop-types'
import Waypoint from 'react-waypoint'
import classNames from 'classnames'
import PackPicture from './pack/pack-picture'
import _ from 'lodash'

const CLASSES = {
  MEDIA_CONTENT_WRAPPER: 'animation-wrapper',
  TEXT_CONTENT_WRAPPER: 'text-wrapper animation-wrapper',
  CONTENT_INIT: 'content-init',
  CONTENT_SHOWING: 'content-showing',
  CONTENT_SHOWN: 'content-shown'
}

export default class Pack extends React.Component {

  constructor(props) {
    super(props)
    this.handleWaypointEnter = this.handleWaypointEnter.bind(this)
    this.handlePictureClick = this.handlePictureClick.bind(this)

    this.state = {
      contentClass: CLASSES.CONTENT_INIT,
      pictures: this.props.pictures
    }
  }

  handleWaypointEnter() {
    this.setState({
      contentClass: CLASSES.CONTENT_SHOWING
    })

    setTimeout(() => {
      this.setState({
        contentClass: CLASSES.CONTENT_SHOWN
      })
    }, 800)
  }

  handlePictureClick(clickedImage) {
    if(this.props.isMobile) return
    
    const clickedImageSrc = clickedImage.props.src;
    const rearrangedPictures = _.without(this.state.pictures, clickedImageSrc)
    //Put selected image in the beginning
    rearrangedPictures.unshift(clickedImageSrc)
     this.setState({
       pictures: rearrangedPictures
     })
  }

  render() {
    const containerClassName = classNames(CLASSES.MEDIA_CONTENT_WRAPPER, this.props.className, this.state.contentClass)

    return <div className={containerClassName}>
      <Waypoint onEnter={this.handleWaypointEnter} />
      {
        this.props.pictures.map(
          pic =>
          <PackPicture
            className="who_pic"
            onClick={this.handlePictureClick}
            key={pic}
            index={this.state.pictures.indexOf(pic)}
            src={pic}
          />
        )
      }
    </div>
  }
}

Pack.propTypes = {
  className: PropTypes.string,
  isMobile: PropTypes.bool,
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}
