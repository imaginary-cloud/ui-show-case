import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getDateISO, isDate } from './helpers/calendar'
import { usePrevious } from './helpers/usePrevious'

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

function DatePicker({ label, value, onDateChanged, placeholder }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(null)
  const [currentDate, setCurrentDate] = useState()

  useEffect(() => {
    const newDate = value && new Date(value)
    if (isDate(newDate)) {
      setCurrentDate(getDateISO(newDate))
    }
  }, [])

  function handleDateChange(date) {
    const newDate = date ? getDateISO(date) : null

    setCurrentDate(newDate)
    setIsCalendarOpen(false)
    if (typeof onDateChanged === 'function') {
      onDateChanged(currentDate)
    }
  }

  const prevDate = usePrevious(value)
  useEffect(() => {
    const dateISO = getDateISO(new Date(currentDate))
    const prevDateISO = getDateISO(new Date(prevDate))

    if (dateISO !== prevDateISO) {
      setCurrentDate(dateISO)
    }
  }, [])

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
          value={currentDate ? currentDate.split('-').join(' / ') : ''}
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
            onDateChanged={date => handleDateChange(date)}
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
}

DatePicker.defaultProps = {
  placeholder: 'MM/DD/YYYY',
}

export default DatePicker
