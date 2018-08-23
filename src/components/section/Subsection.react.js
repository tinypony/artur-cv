import React, {PureComponent} from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SubsectionTitle = styled.h2`
  margin-top: 0;
  font-size: 1.1rem;
  font-family: NexaBold;
`

const Subsection = ({title, children}) => {
  return <div>
    <SubsectionTitle>{title}</SubsectionTitle>
    {children}
  </div>
}

export default Subsection
