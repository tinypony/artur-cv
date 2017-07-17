import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './section-media.scss'

const CLASSNAMES = {
  TOP: 'page-section_media'
}

export default class SectionMedia extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <div className={classNames(CLASSNAMES.TOP, this.props.className)}>
      {this.props.children}
    </div>;
  }
}

SectionMedia.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

SectionMedia.defaultProps = {
  className: CLASSNAMES.TOP
}
