import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import _ from 'lodash'

const CLASSES = {
  IMAGE: 'pack-pic'
}

export default class PackPicture extends React.PureComponent {

  constructor(props) {
    super(props)
    this.handlePictureClick = this.handlePictureClick.bind(this)
  }

  handlePictureClick() {
    this.props.onClick && this.props.onClick(this)
  }

  render() {
    const pictureClassName = classNames(CLASSES.IMAGE, this.props.className, `index-${this.props.index}`)
    const { src } = this.props;
    return <img className={pictureClassName} onClick={this.handlePictureClick} key={src} src={src} />
  }
}

PackPicture.propTypes = {
  src: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string
}
