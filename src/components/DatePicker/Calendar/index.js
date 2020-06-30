/* eslint-disable no-underscore-dangle */
import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import calendar, {
  isDate,
  isSameDay,
  isSameMonth,
  isInRange,
  getDateISO,
  getNextMonth,
  getPreviousMonth,
  WEEK_DAYS,
  CALENDAR_MONTHS,
} from '../helpers/calendar'

import {
  CalendarHeader,
  ArrowContainer,
  ArrowLeft,
  CalendarMonth,
  ArrowRight,
  CalendarDay,
  HighlightedCalendarDate,
  HighlightedRangeCalendarDate,
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
  startSelectRange,
  finishSelectRange,
  selectedRange,
  isRange,
}) {
  const _date = new Date(fullDate.join('-'))

  const isToday = isSameDay(_date, today)
  const isCurrent = current && isSameDay(_date, current)
  const inMonth = isSameMonth(_date, new Date([year, month, 1].join('-')))

  const { start, finish } = selectedRange
  const isDateInSelectedRange = isInRange(_date, start, finish)
  const startOrFinishRange = isSameDay(start, _date) || isSameDay(finish, _date)

  const props = {
    index,
    inMonth,
    onClick: gotoDate(_date),
    onMouseDown: isRange && startSelectRange(_date),
    onMouseUp: isRange && finishSelectRange(_date),
    title: _date.toDateString(),
  }

  /**
   * Return highlight component for the start or finish of one range, or the selected one
   */
  if (startOrFinishRange || isCurrent) {
    return (
      <HighlightedCalendarDate key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </HighlightedCalendarDate>
    )
  }

  /**
   * Return highlight component for the dates in between
   */
  if (isDateInSelectedRange) {
    return (
      <HighlightedRangeCalendarDate key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </HighlightedRangeCalendarDate>
    )
  }

  /**
   * Return the highlight component for today
   */
  if (isToday) {
    return (
      <TodayCalendarDate key={getDateISO(_date)} {...props}>
        {_date.getDate()}
      </TodayCalendarDate>
    )
  }

  /**
   * Return the default date component
   */
  return (
    <CalendarDateStyled key={getDateISO(_date)} {...props}>
      {_date.getDate()}
    </CalendarDateStyled>
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
  getSelectRange: PropTypes.func,
  startSelectRange: PropTypes.func,
  finishSelectRange: PropTypes.func,
  isRange: PropTypes.bool,
  selectedRange: PropTypes.shape({
    start: PropTypes.instanceOf(Date),
    finish: PropTypes.instanceOf(Date),
  }),
}

function Calendar({ date, onDateChanged, isRange }) {
  const [state, setState] = useState({
    today: new Date(),
    ...resolveState(date),
  })

  const [selectedRange, setSelectedRange] = useState({})

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

  const startSelectRange = d => evt => {
    if (evt) {
      evt.preventDefault()
    }

    setSelectedRange({ start: d })
  }

  const finishSelectRange = d => evt => {
    if (evt) {
      evt.preventDefault()
    }

    setSelectedRange(prevState => ({ ...prevState, finish: d }))
  }

  useEffect(() => {
    const timer = setTimeout(() => onDateChanged(selectedRange), 1000)
    return () => clearInterval(timer)
  }, [selectedRange.finish])

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

    const fn = evt.shiftKey ? gotoPreviousYear : gotoPreviousMonth
    handlePressure(fn)
  }

  function handleNext(evt) {
    if (evt) {
      evt.preventDefault()
    }
    const fn = evt.shiftKey ? gotoNextYear : gotoNextMonth
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
            {...{
              fullDate,
              index,
              ...state,
              gotoDate,
              startSelectRange,
              selectedRange,
              finishSelectRange,
              isRange,
            }}
          />
        ))}
      </CalendarGrid>
    </CalendarContainer>
  )
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(Date),
  onDateChanged: PropTypes.func,
  isRange: PropTypes.bool,
}

export default Calendar
