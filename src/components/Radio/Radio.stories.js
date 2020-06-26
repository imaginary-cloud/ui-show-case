import React, { useState } from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Checkbox from './index'

export default {
  title: 'Radio',
  decorators: [withKnobs],
}

export const Default = () => {
  const radioOptions = [
    {
      label: 'Dog',
      id: 'Dog',
    },
    {
      label: 'Monkey',
      id: 'monkey',
    },
    {
      label: 'Giraffe',
      id: 'giraffe',
    },
  ]
  const [checkedOption, setCheckedOption] = useState(false)

  return (
    <fieldset style={{ border: 'none' }}>
      <legend>What is your favorite Wild Animal?</legend>
      {radioOptions.map((radioItem, idx) => (
        <Checkbox
          key={radioItem.id}
          label={text(`radio item ${idx + 1}`, radioItem.label)}
          name="animal-radio"
          id={radioItem.id}
          isChecked={radioItem.id === checkedOption}
          onChange={() => setCheckedOption(radioItem.id)}
          labelStyle={{ color: 'var(--accent-color)' }}
        />
      ))}
    </fieldset>
  )
}

export const DisabledChecked = () => (
  <Checkbox name="no-label" id="no-label" disabled defaultChecked />
)

export const Disabled = () => (
  <Checkbox name="no-label" id="no-label" disabled />
)
