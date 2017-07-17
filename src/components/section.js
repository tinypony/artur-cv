import React from 'react'
import PropTypes from 'prop-types'
import './section.scss'
import classnames from 'classnames'

export default class Section extends React.Component {
  render() {
    let sectionClassName = classnames('page-section', this.props.className);

    return <section className={sectionClassName}>
      {this.props.children}
    </section>
  }
}

Section.propTypes = {
  className: PropTypes.string
}

Section.defaultProps = {
  className: 'page-section'
}
