import React from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import Container from '../Container'

import Tooltip from './index'

export default {
  title: 'Components/Tooltip',
  decorators: [withKnobs],
}

export const Top = () => (
  <Container>
    <Tooltip
      title={text('Top ', 'Tooltip on top')}
      backgroundColor={color('background color', '#333')}
      position="top"
    >
      <button type="button">Tooltip on top</button>
    </Tooltip>
  </Container>
)

export const Right = () => (
  <Container>
    <Tooltip
      title={text('Right ', 'Tooltip on right')}
      backgroundColor={color('background color', '#333')}
      position="right"
    >
      <button type="button">Tooltip on right</button>
    </Tooltip>
  </Container>
)

export const Left = () => (
  <Container>
    <Tooltip
      title={text('Left', 'Tooltip on left')}
      backgroundColor={color('background color', '#333')}
      position="left"
    >
      <button type="button">Tooltip on left</button>
    </Tooltip>
  </Container>
)

export const Bottom = () => (
  <Container>
    <Tooltip
      title={text('Bottom', 'Tooltip on bottom')}
      backgroundColor={color('background color', '#333')}
      position="bottom"
    >
      <button type="button">Tooltip on bottom</button>
    </Tooltip>
  </Container>
)
