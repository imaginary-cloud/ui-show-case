import React, { useState } from 'react'

import Dropdown from './index'

const INITIAL_VALUE = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
]

export default {
  title: 'Components/Dropdown',
}

export const DropdownDefault = () => {
  const [value, setValue] = useState('')

  function handleChange(selected) {
    setValue(selected)
  }

  return (
    <Dropdown
      selectLabel="Which is your favorite flavor?"
      items={INITIAL_VALUE}
      onChange={handleChange}
      selected={value}
    />
  )
}

export const DropdownDisabled = () => (
  <Dropdown selectLabel="Which is your favorite flavor?" disabled />
)

export const DropdownError = () => {
  const [value, setValue] = useState('')

  function handleChange(selected) {
    setValue(selected)
  }

  return (
    <Dropdown
      selectLabel="Which is your favorite flavor?"
      items={INITIAL_VALUE}
      onChange={handleChange}
      selected={value}
      errorMsg="Name is required"
    />
  )
}
