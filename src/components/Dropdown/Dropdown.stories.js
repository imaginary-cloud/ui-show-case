import React, { useState } from 'react'

import Dropdown from './index'
import Container from '../Container'

const INITIAL_VALUE = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
]

export default {
  title: 'Dropdown',
}

export const DropdownDefault = () => {
  const [value, setValue] = useState('')

  function handleChange(selected) {
    setValue(selected)
  }

  return (
    <Container style={{ marginTop: '10px', height: '250px' }}>
      <Dropdown
        selectLabel="Which is your favorite flavor?"
        items={INITIAL_VALUE}
        onChange={handleChange}
        selected={value}
      />
    </Container>
  )
}

export const DropdownDisabled = () => (
  <Container style={{ marginTop: '10px', height: '250px' }}>
    <Dropdown selectLabel="Which is your favorite flavor?" disabled />
  </Container>
)

export const DropdownError = () => {
  const [value, setValue] = useState('')

  function handleChange(selected) {
    setValue(selected)
  }

  return (
    <Container style={{ marginTop: '10px', height: '250px' }}>
      <Dropdown
        selectLabel="Which is your favorite flavor?"
        items={INITIAL_VALUE}
        onChange={handleChange}
        selected={value}
        errorMsg="Name is required"
      />
    </Container>
  )
}
