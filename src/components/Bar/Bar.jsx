import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const BarContainer = styled.div`
  border-radius: 12px;
  background: ${props => props.theme.color.background};
  overflow: hidden;
  position: relative;

  ${props => props.theme.media.desktop} {
      height: 12px;
      width: 300px;
  }

  ${props => props.theme.media.upTo.desktop} {
      height: 10px;
      width: 100%;
      max-width: 300px;
  }
`

const BarFill = styled(motion.div)`
  background: ${props => props.theme.color.gradient};
  height: 100%;
  border-radius: 12px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(to bottom, rgba(255,255,255,0.3), transparent);
    border-radius: 12px 12px 0 0;
  }
`

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

export const Bar = ({ value }) => {
  const delay = getRandomArbitrary(100, 290) / 1000
  const animationSpeed = getRandomArbitrary(300, 500) / 1000

  return <BarContainer>
    <BarFill
      initial={{ width: '0%' }}
      animate={{ width: `${value}%` }}
      transition={{
        duration: animationSpeed,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    />
  </BarContainer>
}
