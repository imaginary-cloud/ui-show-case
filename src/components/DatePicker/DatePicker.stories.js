import React, { useState } from 'react'

import Calendar from './index'
import Container from '../Container'

export default {
  title: 'DatePicker',
}

export const DatePicker = () => (
  <Container style={{ marginTop: '10px', height: '100%' }}>
    <Calendar date={new Date()} onDateChanged={() => console.log('eu')} />
  </Container>
)
