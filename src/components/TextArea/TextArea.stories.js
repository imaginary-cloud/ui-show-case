import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'

import Container from '../Container'

import Input from './index'

export default {
  title: 'Components/TextArea',
}

export const Empty = () => (
  <Container>
    <Input
      label={text('label', 'Comment(s)')}
      placeholder={text('placeholder', 'Insert text here')}
      id="empty"
    />
  </Container>
)

export const Focused = () => (
  <Container>
    <Input
      label={text('label', 'Comment(s)')}
      placeholder={text('placeholder', 'Insert text here')}
      focused
      id="focused"
    />
  </Container>
)

export const Filled = () => {
  const [value, setValue] = useState('I wold like to shar')
  return (
    <Container>
      <Input
        label={text('label', 'Comment(s)')}
        placeholder={text('placeholder', 'Insert text here')}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        id="filled"
        type="text"
      />
    </Container>
  )
}

export const Disabled = () => (
  <Container>
    <Input
      id="disabled"
      label={text('label', 'Comment(s)')}
      placeholder={text('placeholder', 'Insert text here')}
      disabled
    />
  </Container>
)

export const Error = () => {
  const [value, setValue] = useState('')
  return (
    <Container>
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
    </Container>
  )
}
