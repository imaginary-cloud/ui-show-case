import React from 'react'
import PropTypes from 'prop-types'

import { Container, Input, Label } from './style'

const getRandomId = () => Math.random().toString(36)

function Checkbox({ onChange, id = getRandomId(), label, disabled, checked }) {
  return (
    <Container>
      <Input
        id={id}
        onChange={onChange}
        type="checkbox"
        defaultChecked={checked}
        {...{ disabled }}
      />
      <Label htmlFor={id}>{label}</Label>
    </Container>
  )
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
}

export default Checkbox
