import React from 'react'
import PropTypes from 'prop-types'

import {
  // FormField,
  // Select,
  // Option,
  // Label,
  // Highlight,
  // Bar,
  Container,
  CurrentSelectBox,
  BoxValue,
  Text,
  SelectBoxList,
  ListItem,
  Label,
  Arrow,
  Input,
} from './style'

function Dropdown({ items, selectLabel, onChange, selected }) {
  // return (
  //   <FormField>
  //     <Select required onChange={onChange}>
  //       <Option defaultValue=" "></Option>
  //       {items.map(({ value, label }) => (
  //         <Option key={value} value={value}>
  //           {label}
  //         </Option>
  //       ))}
  //     </Select>
  //     <Label>{selectLabel}</Label>
  //     <Bar />
  //   </FormField>
  // )
  return (
    <Container>
      <CurrentSelectBox tabIndex="-1">
        {items.map(({ value, label }) => (
          <BoxValue key={value}>
            <Input
              type="radio"
              value={value}
              name={label}
              onChange={() => console.log()}
              checked={value === selected}
            />
            <Text>{label}</Text>
          </BoxValue>
        ))}
        <Arrow alt="Arrow Icon" aria-hidden="true" />
      </CurrentSelectBox>
      <SelectBoxList>
        <ListItem>
          {items.map(({ value, label }) => (
            <Label
              key={value}
              htmlFor={label}
              aria-hidden="true"
              onClick={() => onChange(value)}
            >
              {value}
            </Label>
          ))}
        </ListItem>
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
  onChange: PropTypes.func.isRequired,
  selectLabel: PropTypes.string,
  selected: PropTypes.string,
}

export default Dropdown
