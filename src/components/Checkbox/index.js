import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Label } from './style'

const getRandomId = () => Math.random().toString(36)

function Checkbox({ onChange, id = getRandomId(), label, labelStyle }) {
  return (
    <Container>
      <Input id={id} onChange={onChange} type="checkbox" />
      <Label htmlFor={id} style={labelStyle}>
        {label}
      </Label>
    </Container>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
}

export default Checkbox
