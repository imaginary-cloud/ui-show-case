import React, { useState } from 'react'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import Checkbox from './index'

export default {
  title: 'Checkbox',
  decorators: [withKnobs],
}

export const WithoutLabel = () => (
  <Checkbox isChecked={boolean('isChecked', false)} />
)
export const WithLabel = () => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <Checkbox
      label={text('label', 'Checkbox With Label')}
      onChange={() => setIsChecked(prevState => !prevState)}
      isChecked={boolean('isChecked', isChecked)}
      labelStyle={{ color: '#fff' }}
    />
  )
}
