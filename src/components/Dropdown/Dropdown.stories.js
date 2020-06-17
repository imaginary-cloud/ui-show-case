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

export const WitLabel = () => {
  const [value, setValue] = useState(' ')

  function handleSubmit(event) {
    console.log('---> ', value)
    // avoid page reload
    event.preventDefault()
  }

  function handleChange(selected) {
    console.log('selected', selected)
    setValue(selected)
  }

  return (
    <Container>
      <form style={{ width: '500px' }} onSubmit={handleSubmit}>
        <Dropdown
          selectLabel="Pick your favorite flavor: "
          items={INITIAL_VALUE}
          onChange={handleChange}
          selected={value}
        />
      </form>
    </Container>
  )
}
