import React from 'react'
import { text } from '@storybook/addon-knobs'

import DatePicker from './index'

export default {
  title: 'Components/DatePicker',
}

export const DatePickerDefault = () => (
  <DatePicker
    label={text('label', 'Date')}
    value=""
    onDateChanged={(d) => console.log('---> DatePicker ---> ', d)}
  />
)

export const DatePickerWithRange = () => (
  <DatePicker
    label={text('label', 'Date')}
    isRange
    placeholder="DD/MM/YYYY - DD/MM/YYYY"
    value=""
    onDateChanged={(d) => console.log('---> DatePicker ---> ', d)}
  />
)
