import React, { useState } from 'react'
import { text } from '@storybook/addon-knobs'

import DatePicker from './index'

import Container from '../Container'
import { getDateISO } from './helpers/calendar'

export default {
  title: 'DatePicker',
}

export const DatePickerDefault = () => {
  const [date, setDate] = useState(new Date())

  return (
    <Container
      style={{
        marginTop: '10px',
        height: '100%',
        width: '60%',
        margin: '20% auto',
      }}
    >
      <DatePicker
        label={text('label', 'Date')}
        value=""
        onDateChanged={d => console.log('---> DatePicker ---> ', d)}
      />
    </Container>
  )
}
