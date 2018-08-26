import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubsectionTitle = styled.h2`
  margin-top: 0;
  font-family: NexaBold;

  ${props => props.theme.media.upTo.tablet} {
    font-size: 1rem;
  }

  ${props => props.theme.media.from.tablet} {
    font-size: 1.1rem;
  }
`

const Subsection = ({title, children}) => {
  return <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    {children}
  </div>
}

export default Subsection
