import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'

import Container from '../Container'

import Input from './index'

export default {
  title: 'Components/TextInput',
}

export const Empty = () => (
  <Container>
    <Input label={text('label', 'First Name')} id="empty" />
  </Container>
)

export const Focused = () => (
  <Container>
    <Input label={text('label', 'First Name')} focused id="focused" />
  </Container>
)

export const Filled = () => {
  const [value, setValue] = useState('Hanna')
  return (
    <Container>
      <Input
        label={text('label', 'First Name')}
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
    <Input id="disabled" label={text('label', 'First Name')} disabled />
  </Container>
)

export const Error = () => {
  const [value, setValue] = useState('Error')
  return (
    <Container>
      <Input
        label={text('label', 'First Name')}
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
