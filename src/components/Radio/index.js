import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Label } from './style'

function Radio({ onChange, id, name, label, labelStyle }) {
  return (
    <Container>
      <Input id={id} name={name} onChange={onChange} type="radio" />
      <Label htmlFor={id} style={labelStyle}>
        {label}
      </Label>
    </Container>
  )
}

Radio.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  labelStyle: PropTypes.object,
}

export default Radio
