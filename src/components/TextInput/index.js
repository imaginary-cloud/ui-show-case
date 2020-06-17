import React from 'react'
import PropTypes from 'prop-types'

import {
  FormField,
  FormFieldControl,
  InputItem,
  Label,
  Bar,
  Help,
} from './style'

function Input({
  label,
  id,
  value,
  onChange,
  type,
  focused,
  disabled,
  helpText,
  hasError,
}) {
  return (
    <FormField>
      <FormFieldControl>
        <InputItem
          autoFocus={focused}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          disabled={disabled}
          hasError={hasError}
          placeholder=" "
        />
        <Label htmlFor={id}>{label}</Label>
        <Bar />
      </FormFieldControl>
      <Help hasError={hasError}>{helpText}</Help>
    </FormField>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
}

export default Input
