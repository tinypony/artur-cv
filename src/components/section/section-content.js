import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './section-content.scss'

const CLASSNAMES = {
  TOP: 'page-section_content'
}

export default class SectionContent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let contentClassName = classNames(CLASSNAMES.TOP, 'direction__' + this.props.direction, this.props.className);

    return <div className={contentClassName}>
      {this.props.children}
    </div>;
  }
}

SectionContent.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string,
  direction: PropTypes.oneOf(['left', 'right'])
}

SectionContent.defaultProps = {
  className: CLASSNAMES.TOP,
  direction: 'right'
}
