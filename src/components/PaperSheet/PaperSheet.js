import React from 'react'
import styled from 'styled-components'

export const PaperSheet = styled.div`
  margin: 0 auto;
  background: white;

  ${props => props.theme.media.desktop} {
      width: 1024px;
      box-shadow: ${props => props.theme.color.documentShadow} 0px 1px 3px 0px;
  }

  ${props => props.theme.media.upTo.desktop} {
      width: 100%;
  }

`
