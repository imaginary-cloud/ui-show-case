import React from 'react'
import { withKnobs, text, color } from '@storybook/addon-knobs'

import Tooltip from './index'

import Body from '../Body'
import Button from '../Button'

export default {
  title: 'Components/Tooltip',
  decorators: [withKnobs],
}

const Icon = () => (
  <div
    style={{
      background: '#3B3737',
      width: '22px',
      height: '22px',
      borderRadius: '22px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <span
      style={{
        fontSize: '14px',
        lineHeight: '17px',
        color: '#fff',
      }}
    >
      ?
    </span>
  </div>
)

export const Top = () => (
  <Tooltip
    // tooltipContent={text('Top ', 'Tooltip information here.')}
    // tooltipContent={<TooltipContent />}
    tooltipContent={<TooltipContentWithActions />}
    style={{
      border: '1.5px solid #3B3737',
      backgroundColor: '#fff',
      color: '#161616',
    }}
    position="top"
  >
    <Icon />
  </Tooltip>
)

const TooltipContent = () => (
  <div>
    <Body>Get to know more about about new filters</Body>
  </div>
)

const TooltipContentWithActions = () => (
  <div
    style={{ whiteSpace: 'normal', wordBreak: 'break-all', padding: '15px' }}
  >
    <Body>Get to know more about about new filters</Body>
    <div style={{ marginTop: '15px' }}>
      <Button onClick={() => alert('eu')}>LEARN MORE</Button>
    </div>
  </div>
)

export const Right = () => (
  <Tooltip
    backgroundColor={color('background color', '#333')}
    position="right"
    style={{
      border: '1.5px solid #3B3737',
      backgroundColor: '#fff',
      color: '#161616',
    }}
  >
    <Icon />
  </Tooltip>
)

export const Left = () => (
  <Tooltip
    tooltipContent={<TooltipContent />}
    backgroundColor={color('background color', '#333')}
    position="left"
    style={{
      border: '1.5px solid #3B3737',
      backgroundColor: '#fff',
      color: '#161616',
    }}
  >
    <Icon />
  </Tooltip>
)

export const Bottom = () => (
  <Tooltip
    tooltipContent={<TooltipContent />}
    backgroundColor={color('background color', '#333')}
    position="bottom"
    style={{
      border: '1.5px solid #3B3737',
      backgroundColor: '#fff',
      color: '#161616',
    }}
  >
    <Icon />
  </Tooltip>
)
