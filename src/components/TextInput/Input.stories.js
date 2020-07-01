import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'

import Input from './index'

export default {
  title: 'Components/TextInput',
}

export const Empty = () => (
  <Input label={text('label', 'First Name')} id="empty" />
)

export const Focused = () => (
  <Input label={text('label', 'First Name')} focused id="focused" />
)

export const Filled = () => {
  const [value, setValue] = useState('Hanna')
  return (
    <Input
      label={text('label', 'First Name')}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      id="filled"
      type="text"
    />
  )
}

export const Disabled = () => (
  <Input id="disabled" label={text('label', 'First Name')} disabled />
)

export const Error = () => {
  const [value, setValue] = useState('Error')
  return (
    <Input
      label={text('label', 'First Name')}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      id="error"
      type="text"
      helpText={text('error message', 'Error message')}
      hasError
    />
  )
}
