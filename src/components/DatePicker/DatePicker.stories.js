import React from 'react'
import { text } from '@storybook/addon-knobs'

import DatePicker from './index'

import Container from '../Container'

export default {
  title: 'DatePicker',
}

export const DatePickerDefault = () => (
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
      onDateChanged={date => console.log(date)}
    />
  </Container>
)
