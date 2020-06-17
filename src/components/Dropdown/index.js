import React from 'react'
import PropTypes from 'prop-types'

function Select({ items, selectLabel, onChange }) {
  return (
    <label>
      {selectLabel}
      <select onChange={onChange}>
        {items.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  )
}

Select.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
      isSelected: PropTypes.bool,
    }).isRequired,
  ),
  onChange: PropTypes.func.isRequired,
  selectLabel: PropTypes.string,
}

export default Select
