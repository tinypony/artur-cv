import React, {PureComponent} from 'react'
import styled from 'styled-components'

const StyledCanvas = styled.div`
  box-shadow: rgba(0,0,0, 0.3) 0px 1px 3px 0px;
  width: 1024px;
  margin: 0 auto;
  background: white;
`

export default class Canvas extends PureComponent {
  render() {
    return <StyledCanvas>
      {this.props.children}
    </StyledCanvas>
  }
}
