import React from 'react'
import styled from 'styled-components'
import { Transition } from 'react-transition-group'

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

const getBarWidth = ({ state, value }) => {
  if (state === 'entering') {
    return 1
  } else {
    return value
  }
}

const BarFill = styled.div`
  width: ${getBarWidth}%;
  background: ${props => props.theme.color.turcose};
  height: 100%;
  transition: width ${props => props.animationSpeed}s cubic-bezier(.47,1.64,.41,.4);
`

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

export const Bar = ({ value }) => {
  const timeout = getRandomArbitrary(100, 290)
  const animationSpeed = getRandomArbitrary(150, 250) / 1000

  return <BarContainer>
    <Transition in timeout={timeout}
      appear
      unmountOnExit
    >
      {state => {
        return <BarFill state={state} value={value} animationSpeed={animationSpeed} />
      }}
    </Transition>
  </BarContainer>
}
