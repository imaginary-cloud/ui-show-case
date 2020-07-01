import React from 'react'
import { text } from '@storybook/addon-knobs'

import Calendar from './index'

export default {
  title: 'Components/Calendar',
}

export const CalendarDefault = () => (
  <Calendar
    label={text('label', 'Date')}
    value=""
    onDateChanged={(d) => console.log('---> DatePicker ---> ', d)}
  />
)
