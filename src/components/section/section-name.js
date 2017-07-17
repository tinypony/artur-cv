import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './section-name.scss'

const CLASSNAMES = {
  TOP: 'page-section_name'
}

export default class SectionName extends React.PureComponent {
  constructor(props) {
    super();
  }

  render() {
    const className = classNames(CLASSNAMES.TOP, this.props.className)
    return <div className={className}>
      {this.props.text}
    </div>
  }
}

SectionName.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string
}
