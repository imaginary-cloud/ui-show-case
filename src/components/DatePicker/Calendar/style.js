import styled from 'styled-components'

const SvgArrow = `
<svg width="7" height="11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.75.75l-4.5 4.5 4.5 4.5" stroke="#161616" stroke-width="1.5"/></svg>
`

export const Arrow = styled.button`
  background-image: url('data:image/svg+xml;base64,${btoa(SvgArrow)}');
  height: 15px;
  width: 10px;
  outline: none;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
`

export const ArrowLeft = styled(Arrow)``

export const ArrowRight = styled(Arrow)`
  transform: rotate(-180deg);
`

export const CalendarContainer = styled.div`
  font-size: 5px;
  border-width: ${({ theme }) => theme.defaultBorderHeight};
  border-style: solid;
  border-color: ${({ theme }) => theme.primary};
  overflow: hidden;
  padding: 10px;
`

export const CalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ArrowContainer = styled(CalendarHeader)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50px;
`

export const CalendarGrid = styled.div`
  display: grid;
  grid-template: repeat(7, auto) / repeat(7, auto);
`

export const CalendarMonth = styled.h1`
  font-size: 1em;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  padding: 0.5em 0.25em;
  user-select: none;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
`

export const CalendarCell = styled.div.attrs(
  ({ index, inMonth, onClick, title }) => ({
    index,
    inMonth,
    onClick,
    title,
  }),
)`
  text-align: center;
  align-self: center;

  padding: 10px;
  user-select: none;
  grid-column: ${props => (props.index % 7) + 1} / span 1;
`

export const CalendarDay = styled(CalendarCell)`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 26px;
  color: ${({ theme }) => theme.primary};
`

export const CalendarDateStyled = styled(CalendarCell)`
  font-weight: normal;
  font-size: 1em;
  cursor: pointer;
  opacity: ${props => (props.inMonth ? `1` : `0.4`)};
  color: ${({ theme }) => theme.primary};
  grid-row: ${props => Math.floor(props.index / 7) + 2} / span 1;
  transition: all 0.4s ease-out;
  :hover {
    background: ${({ theme }) => theme.lightBackground};
  }
`

export const HighlightedCalendarDate = styled(CalendarDateStyled)`
  background: ${({ theme }) => theme.accentColor};
  color: ${({ theme }) => theme.white};
`

export const TodayCalendarDate = styled(CalendarDateStyled)`
  border-width: 1px;
  border-color: ${({ theme }) => theme.primary};
  border-style: solid;
`
