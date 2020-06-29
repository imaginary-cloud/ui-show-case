import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
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
