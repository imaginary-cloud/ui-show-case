import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { getDateISO, isDate, isInRange } from './helpers/calendar'

import Calendar from './Calendar'

import {
  Container,
  DatePickerFormGroup,
  DatePickerLabel,
  DatePickerInput,
  DatePickerDropdown,
  DatePickerDropdownMenu,
  DatePickerDropdownToggle,
} from './style'

function DatePicker({ label, value, onDateChanged, placeholder, isRange }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    const newDate = value && new Date(value)
    if (isDate(newDate)) {
      setCurrentDate(getDateISO(newDate))
    }
  }, [])

  const handleDateChangeCallback = useCallback(d => handleDateChange(d), [])

  function handleDateChange(d) {
    setCurrentDate(d)
    setIsCalendarOpen(false)

    if (typeof onDateChanged === 'function') {
      onDateChanged(d)
    }
  }

  function getDataValue() {
    const formatData = data => {
      const iso = getDateISO(data)
      return iso.split('-').join(' / ')
    }

    if (isInRange) {
      return currentDate
        ? `${formatData(currentDate.start)} - ${formatData(currentDate.finish)}`
        : ''
    }

    return currentDate ? formatData(currentDate) : ''
  }

  return (
    <Container>
      <DatePickerFormGroup
        className={isCalendarOpen || !!currentDate ? 'selected' : ''}
      >
        <DatePickerLabel
          className={isCalendarOpen || !!currentDate ? 'selected' : ''}
        >
          {label}
        </DatePickerLabel>
        <DatePickerInput
          type="text"
          value={getDataValue()}
          onChange={evt => evt.preventDefault()}
          readOnly="readonly"
          placeholder={isCalendarOpen && !currentDate ? placeholder : ''}
        />
      </DatePickerFormGroup>

      <DatePickerDropdown>
        <DatePickerDropdownToggle
          onClick={() => setIsCalendarOpen(prevState => !prevState)}
        >
          <span className="sr-only">Toggle Dropdown</span>
        </DatePickerDropdownToggle>

        <DatePickerDropdownMenu
          tabindex="0"
          role="menu"
          aria-hidden="false"
          className={isCalendarOpen && 'open'}
        >
          <Calendar
            date={currentDate && new Date(currentDate)}
            onDateChanged={handleDateChangeCallback}
            isRange={isRange}
          />
        </DatePickerDropdownMenu>
      </DatePickerDropdown>
    </Container>
  )
}

DatePicker.propTypes = {
  value: PropTypes.string,
  onDateChanged: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  isRange: PropTypes.bool,
}

DatePicker.defaultProps = {
  placeholder: 'MM/DD/YYYY',
}

export default DatePicker
