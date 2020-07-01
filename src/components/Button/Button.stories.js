import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

export default {
  title: 'Components/Button',
  decorators: [withKnobs],
}

export const ButtonLevel1Inactive = () => (
  <Button onClick={action('clicked')} disabled>
    {text('Text', 'BUTTON')}
  </Button>
)

export const ButtonLevel1Default = () => (
  <Button onClick={action('clicked')}>{text('Text', 'BUTTON')}</Button>
)

export const ButtonLevel2Inactive = () => (
  <Button onClick={action('clicked')} outline disabled>
    {text('Text', 'BUTTON')}
  </Button>
)

export const ButtonLevel2Default = () => (
  <Button onClick={action('clicked')} outline>
    {text('Text', 'BUTTON')}
  </Button>
)

export const ButtonLevel3Inactive = () => (
  <Button onClick={action('clicked')} link disabled>
    {text('Text', 'BUTTON')}
  </Button>
)

export const ButtonLevel3Default = () => (
  <Button onClick={action('clicked')} link>
    {text('Text', 'BUTTON')}
  </Button>
)
