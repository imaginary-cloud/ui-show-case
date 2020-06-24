import React from 'react'
import PropTypes from 'prop-types'

import {
  FormField,
  FormFieldControl,
  TextArea,
  Label,
  Bar,
  Help,
} from './style'

function Input({
  label,
  id,
  value,
  onChange,
  focused,
  disabled,
  helpText,
  hasError,
  placeholder,
}) {
  return (
    <FormField>
      <FormFieldControl>
        <TextArea
          autoFocus={focused}
          id={id}
          type=""
          value={value}
          onChange={onChange}
          disabled={disabled}
          hasError={hasError}
          placeholder={placeholder}
        />
        <Label htmlFor={id}>{label}</Label>
      </FormFieldControl>
      <Help hasError={hasError}>{helpText}</Help>
    </FormField>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  helpText: PropTypes.string,
  hasError: PropTypes.bool,
}

export default Input
