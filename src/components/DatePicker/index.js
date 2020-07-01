import React, { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { getDateISO, isDate } from './helpers/calendar'

import Calendar from '../Calendar'

import {
  Container,
  DatePickerFormGroup,
  DatePickerLabel,
  DatePickerInput,
  DatePickerDropdown,
  DatePickerDropdownMenu,
  DatePickerDropdownToggle,
  CalendarIcon,
} from './style'

function DatePicker({
  label,
  value,
  onDateChanged,
  placeholder,
  isRange,
  disabled,
}) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    const newDate = value && new Date(value)
    if (isDate(newDate)) {
      setCurrentDate(getDateISO(newDate))
    }
  }, [])

  const handleDateChangeCallback = useCallback((d) => handleDateChange(d), [])

  function handleDateChange(d) {
    const formatData = (data) => {
      const iso = getDateISO(data)
      return iso && iso.split('-').join(' / ')
    }
    const { start, finish } = d
    const newDate =
      isRange && start && finish && d
        ? `${formatData(start)} - ${formatData(finish)}`
        : formatData(d)

    setCurrentDate(newDate)
    setIsCalendarOpen(false)

    if (typeof onDateChanged === 'function') {
      onDateChanged(d)
    }
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
          value={currentDate || ''}
          onChange={(evt) => evt.preventDefault()}
          readOnly="readonly"
          placeholder={isCalendarOpen && !currentDate ? placeholder : ''}
        />
        <CalendarIcon />
      </DatePickerFormGroup>

      <DatePickerDropdown>
        <DatePickerDropdownToggle
          onClick={() =>
            !disabled && setIsCalendarOpen((prevState) => !prevState)
          }
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
