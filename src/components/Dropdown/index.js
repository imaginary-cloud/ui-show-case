import React, { useState } from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  CurrentSelectBox,
  FloatingLabel,
  BoxValue,
  Text,
  SelectBoxList,
  ListItem,
  Label,
  Arrow,
  Input,
  HelpMsg,
} from './style'

function Dropdown({
  items,
  selectLabel,
  onChange,
  selected,
  disabled,
  errorMsg,
}) {
  const [hideError, setHideError] = useState(true)

  return (
    <Container className={disabled && 'disabled'}>
      <CurrentSelectBox
        tabIndex="0"
        className={(!!selected && 'checked') || (errorMsg && 'error')}
        onClick={() => {
          if (errorMsg) {
            setHideError(false)
          }
        }}
      >
        {items &&
          items.map(({ value, label }) => (
            <BoxValue key={value}>
              <Input
                type="radio"
                value={value}
                name={label}
                onChange={() => {
                  // React requires onChange function to controlled
                  // inputs, still doesn't found a way of make an workaround it
                  console.log()
                }}
                checked={value === selected}
                disabled={disabled}
              />
              <Text>{label}</Text>
            </BoxValue>
          ))}
        <FloatingLabel className={!!selected && 'checked'}>
          {selectLabel}
        </FloatingLabel>
        <Arrow alt="Arrow Icon" aria-hidden="true" />
      </CurrentSelectBox>
      {errorMsg && hideError && <HelpMsg>{errorMsg}</HelpMsg>}
      <SelectBoxList>
        {items &&
          items.map(({ value, label }) => (
            <ListItem key={value}>
              <Label
                htmlFor={label}
                aria-hidden="true"
                onClick={() => {
                  onChange(value)
                }}
              >
                {value}
              </Label>
            </ListItem>
          ))}
      </SelectBoxList>
    </Container>
  )
}

Dropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      isSelected: PropTypes.bool,
    }).isRequired,
  ),
  onChange: PropTypes.func,
  selectLabel: PropTypes.string,
  selected: PropTypes.string,
  disabled: PropTypes.bool,
  errorMsg: PropTypes.string,
}

export default Dropdown
