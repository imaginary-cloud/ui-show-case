/* eslint-disable no-underscore-dangle */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from '../helpers/calendar'
import { usePrevious } from '../helpers/usePrevious'

import {
  CalendarHeader,
  ArrowContainer,
  ArrowLeft,
  CalendarMonth,
  ArrowRight,
  CalendarDay,
  HighlightedCalendarDate,
  TodayCalendarDate,
  CalendarDateStyled,
  CalendarContainer,
  CalendarGrid,
} from './style'

function MonthAndYear({
  month,
  year,
  handlePrevious,
  clearPressureTimer,
  handleNext,
}) {
  const monthName = Object.keys(CALENDAR_MONTHS)[
    Math.max(0, Math.min(month - 1, 11))
  ]

  return (
    <CalendarHeader>
      <CalendarMonth>
        {monthName} {year}
      </CalendarMonth>

      <ArrowContainer>
        <ArrowLeft
          onMouseDown={handlePrevious}
          onMouseUp={clearPressureTimer}
          title="Previous Month"
        />
        <ArrowRight
          onMouseDown={handleNext}
          onMouseUp={clearPressureTimer}
          title="Next Month"
        />
      </ArrowContainer>
    </CalendarHeader>
  )
}

MonthAndYear.propTypes = {
  month: PropTypes.number,
  year: PropTypes.number,
  handlePrevious: PropTypes.func,
  clearPressureTimer: PropTypes.func,
  handleNext: PropTypes.func,
}

function DayLabel({ day, index }) {
  const dayLabel = WEEK_DAYS[day].toUpperCase()
  return (
    <CalendarDay key={dayLabel} index={index}>
      {dayLabel}
    </CalendarDay>
  )
}

DayLabel.propTypes = {
  day: PropTypes.string,
  index: PropTypes.number,
}

function CalendarDate({
  fullDate,
  index,
  current,
  month,
  year,
  today,
  gotoDate,
}) {
  const _date = new Date(fullDate.join('-'))

  const isToday = isSameDay(_date, today)
  const isCurrent = current && isSameDay(_date, current)
  const inMonth = isSameMonth(_date, new Date([year, month, 1].join('-')))

  const props = {
    index,
    inMonth,
    onClick: gotoDate(_date),
    title: _date.toDateString(),
  }

  // eslint-disable-next-line no-nested-ternary
  const DateComponent = isCurrent
    ? HighlightedCalendarDate
    : isToday
    ? TodayCalendarDate
    : CalendarDateStyled

  return (
    <DateComponent key={getDateISO(_date)} {...props}>
      {_date.getDate()}
    </DateComponent>
  )
}

CalendarDate.propTypes = {
  fullDate: PropTypes.array,
  index: PropTypes.number,
  current: PropTypes.object,
  month: PropTypes.number,
  year: PropTypes.number,
  today: PropTypes.object,
  gotoDate: PropTypes.func,
}

function Calendar({ date, onDateChanged }) {
  const [state, setState] = useState({
    today: new Date(),
    ...resolveState(date),
  })

  const dayTimeout = useRef()
  const pressureTimer = useRef()
  const pressureTimeout = useRef()

  function resolveState(d) {
    const isDateObject = isDate(d)
    const _date = isDateObject ? d : new Date()

    return {
      current: isDateObject ? d : null,
      month: +_date.getMonth() + 1,
      year: _date.getFullYear(),
    }
  }

  function getCalendarDates() {
    const { current, month, year } = state
    const calendarMonth = month || +current.getMonth() + 1
    const calendarYear = year || current.getFullYear()

    return calendar(calendarMonth, calendarYear)
  }

  const gotoDate = d => evt => {
    if (evt) {
      evt.preventDefault()
    }

    const { current } = state
    if (!(current && isSameDay(date, current))) {
      setState(prevState => ({ ...prevState, ...resolveState(d) }))
    }

    if (typeof onDateChanged === 'function') {
      onDateChanged(d)
    }
  }

  function gotoPreviousMonth() {
    const { month, year } = state
    setState(prevState => ({ ...prevState, ...getPreviousMonth(month, year) }))
  }

  function gotoNextMonth() {
    const { month, year } = state
    setState(prevState => ({ ...prevState, ...getNextMonth(month, year) }))
  }

  function gotoPreviousYear() {
    const { year } = state
    setState(prevState => ({ ...prevState, year: year - 1 }))
  }

  function gotoNextYear() {
    const { year } = state
    setState(prevState => ({ ...prevState, year: year + 1 }))
  }

  function handlePressure(fn) {
    if (typeof fn === 'function') {
      fn()
      pressureTimeout.current = setTimeout(() => {
        pressureTimer.current = setInterval(fn, 100)
      }, 500)
    }
  }

  function clearPressureTimer() {
    if (pressureTimer.current) {
      clearInterval(pressureTimer.current)
    }

    if (pressureTimeout.current) {
      clearTimeout(pressureTimeout.current)
    }
  }

  function clearDayTimeout() {
    if (dayTimeout.current) {
      clearTimeout(dayTimeout.current)
    }
  }

  function handlePrevious(evt) {
    if (evt) {
      evt.preventDefault()
    }
    const fn = evt.shiftKey ? gotoPreviousYear() : gotoPreviousMonth()
    handlePressure(fn)
  }

  function handleNext(evt) {
    if (evt) {
      evt.preventDefault()
    }
    const fn = evt.shiftKey ? gotoNextYear() : gotoNextMonth()
    handlePressure(fn)
  }

  useEffect(() => {
    const now = new Date()
    const tomorrow = new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000
    const ms = tomorrow - now

    dayTimeout.current = setTimeout(() => {
      setState(prevState => ({ ...prevState, today: new Date() }))
      clearDayTimeout()
    }, ms)

    return () => {
      clearPressureTimer()
      clearDayTimeout()
    }
  }, [])

  useEffect(() => {
    const { current } = state
    if (!(current && isSameDay(date, current))) {
      setState(prevState => ({ ...prevState, ...resolveState(date) }))
    }
  }, [date])

  return (
    <CalendarContainer>
      <MonthAndYear
        {...{ ...state, handlePrevious, clearPressureTimer, handleNext }}
      />

      <CalendarGrid>
        {Object.keys(WEEK_DAYS).map((day, index) => (
          <DayLabel key={String(day)} {...{ day, index }} />
        ))}
        {getCalendarDates().map((fullDate, index) => (
          <CalendarDate
            key={String(fullDate)}
            {...{ fullDate, index, ...state, gotoDate }}
          />
        ))}
      </CalendarGrid>
    </CalendarContainer>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func,
}

export default Calendar
