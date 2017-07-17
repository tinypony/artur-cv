import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './section-content-text.scss'

const CLASSNAMES = {
  TOP: 'page-section_content'
}

export default class SectionContentText extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <section className={CLASSNAMES.TOP}>
      {this.props.text}
    </section>;
  }
}

SectionContentText.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string
}

SectionContentText.defaultProps = {
  className: CLASSNAMES.TOP
}
