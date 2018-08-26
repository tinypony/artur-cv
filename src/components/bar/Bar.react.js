import React, {PureComponent} from 'react'
import styled from 'styled-components'

const BarContainer = styled.div`
  border: 2px ${props => props.theme.color.turcose} solid;

  ${props => props.theme.media.desktop} {
      height: 20px;
      width: 300px;
  }

  ${props => props.theme.media.upTo.desktop} {
      height: 15px;
      width: 100%;
      max-width: 300px;
  }
`

const BarFill = styled.div`
  width: ${props => props.value}%;
  background: ${props => props.theme.color.turcose};
  height: 100%;
`

export default class LanguageSkillChart extends PureComponent {
  render() {
    return <BarContainer>
      <BarFill value={this.props.value} />
    </BarContainer>
  }
}
