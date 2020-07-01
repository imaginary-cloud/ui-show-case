import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'

// import Container from '../Container'

import Input from './index'

export default {
  title: 'Components/TextArea',
}

export const Empty = () => (
  <Input
    label={text('label', 'Comment(s)')}
    placeholder={text('placeholder', 'Insert text here')}
    id="empty"
  />
)

export const Focused = () => (
  <Input
    label={text('label', 'Comment(s)')}
    placeholder={text('placeholder', 'Insert text here')}
    focused
    id="focused"
  />
)

export const Filled = () => {
  const [value, setValue] = useState('I wold like to shar')
  return (
    <Input
      label={text('label', 'Comment(s)')}
      placeholder={text('placeholder', 'Insert text here')}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      id="filled"
      type="text"
    />
  )
}

export const Disabled = () => (
  <Input
    id="disabled"
    label={text('label', 'Comment(s)')}
    placeholder={text('placeholder', 'Insert text here')}
    disabled
  />
)

export const Error = () => {
  const [value, setValue] = useState('')
  return (
    <Input
      label={text('label', 'Comment(s)')}
      placeholder={text('placeholder', 'Insert text here')}
      value={value}
      onChange={(event) => setValue(event.target.value)}
      id="error"
      type="text"
      helpText={text('error message', 'Error message')}
      hasError
    />
  )
}
