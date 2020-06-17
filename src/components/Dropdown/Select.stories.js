import React, { useState } from 'react'

import Select from './index'

const INITIAL_VALUE = [
  { value: 'grapefruit', label: 'Grapefruit' },
  { value: 'lime', label: 'Lime' },
  { value: 'coconut', label: 'Coconut' },
  { value: 'mango', label: 'Mango' },
]

export default {
  title: 'Select',
}

export const Default = () => {
  const [value, setValue] = useState(INITIAL_VALUE[0].value)

  function handleSubmit(event) {
    console.log('---> ', value)
    // avoid page reload
    event.preventDefault()
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Select items={INITIAL_VALUE} onChange={handleChange} />
      <input type="submit" value="Submit" disabled={!value} />
    </form>
  )
}

export const WitLabel = () => {
  const [value, setValue] = useState(INITIAL_VALUE[0].value)

  function handleSubmit(event) {
    console.log('---> ', value)
    // avoid page reload
    event.preventDefault()
  }

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Select
        selectLabel="Pick your favorite flavor: "
        items={INITIAL_VALUE}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" disabled={!value} />
    </form>
  )
}
