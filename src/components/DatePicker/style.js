import styled, { keyframes } from 'styled-components'

const calendar = `
<svg width="18" height="20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.568 7.023H0v3.568h3.568V7.023zM8.326 7.023H4.758v3.568h3.568V7.023zM13.163 7.023H9.595v3.568h3.568V7.023zM15.542 2.344V.6h-3.569v1.744H5.947V.6H2.38v1.744H0v3.569h17.92V2.344h-2.378zM18 7.023h-3.568v3.568H18V7.023zM3.568 11.463H0v3.569h3.568v-3.569zM8.326 11.463H4.758v3.569h3.568v-3.569zM13.163 11.463H9.595v3.569h3.568v-3.569zM18 11.463h-3.568v3.569H18v-3.569zM3.568 15.904H0v3.568h3.568v-3.568zM8.326 15.904H4.758v3.568h3.568v-3.568zM13.163 15.904H9.595v3.568h3.568v-3.568zM18 15.904h-3.568v3.568H18v-3.568z" fill="#161616"/></svg>
`

export const Container = styled.div`
  width: 100%;
  min-width: 378px;
  position: relative;
`

export const CalendarIcon = styled.div`
   background-image: url('data:image/svg+xml;base64,${btoa(calendar)}');
  height: 15px;
  width: 10px;
  outline: none;
  background-repeat: no-repeat;
  background-position: center;
  border: none;
  background-color: transparent;
  padding: 16px;
  cursor: pointer;
  transition: all 0.4s;

  position: absolute;
  right: 5px;
  top: 3px;
`

export const DatePickerFormGroup = styled.div`
  --animation-duration: 0.4s;

  position: relative;
  height: 40px;
  width: 100%;
  border-bottom: ${({ theme }) => theme.defaultBorderHeight} solid
    ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.lightBackground};
  user-select: none;

  &.selected {
    border-bottom-color: ${({ theme }) => theme.accentColor};
  }
`

export const DatePickerLabel = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  transform: translateY(0px);
  transition: all var(--animation-duration);
  opacity: 0.7;

  &.selected {
    transform: translateY(-35px);
    color: ${({ theme }) => theme.accentColor};
  }
`

export const DatePickerInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  width: 100%;
  height: 100%;
  border: 0;
  padding: 8px;

  &:focus {
    outline: none;
  }
`

export const DatePickerDropdown = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`

export const DatePickerDropdownToggle = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  background: transparent;
  opacity: 0;
  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`

const fadeInDown = keyframes`
    from {
        opacity: 0;
        transform: translate3d(0, -45px, 0);
    }

    to {
        opacity: 1;
        transform: none;
    }
`

export const DatePickerDropdownMenu = styled.div`
  animation-duration: 1s;
  animation-fill-mode: both;
  opacity: 0;
  &.open {
    animation-name: ${fadeInDown};
  }
`
