import React from 'react'
import styled from 'styled-components'

export const PaperSheet = styled.div`
  margin: 0 auto;
  background: white;
  overflow: hidden;

  ${props => props.theme.media.desktop} {
    width: 1024px;
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-radius: 24px;
    box-shadow:
      0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -2px rgba(0, 0, 0, 0.1),
      0 25px 50px -12px rgba(0, 0, 0, 0.15);
  }

  ${props => props.theme.media.print},
  ${props => props.theme.media.upTo.desktop} {
    width: 100%;
    border-radius: 0;
  }
`
