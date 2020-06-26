import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Label } from './style'

function Radio({ onChange, id, name, label, defaultChecked, disabled }) {
  return (
    <Container>
      <Input
        id={id}
        name={name}
        onChange={onChange}
        type="radio"
        {...{ defaultChecked, disabled }}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  )
}

Radio.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
}

export default Radio
