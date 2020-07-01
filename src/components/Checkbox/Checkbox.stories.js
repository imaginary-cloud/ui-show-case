import React, { useState } from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Checkbox from './index'

export default {
  title: 'Components/Checkbox',
  decorators: [withKnobs],
}

export const Default = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Checkbox
      label={text('label', 'Checkbox With Label')}
      onChange={() => setIsChecked((prevState) => !prevState)}
      checked={boolean('isChecked', !isChecked)}
    />
  )
}

export const DisabledChecked = () => (
  <Checkbox label={text('label', 'Checkbox With Label')} disabled checked />
)

export const Disabled = () => (
  <Checkbox label={text('label', 'Checkbox With Label')} disabled />
)
