import styled, { keyframes } from 'styled-components'

const svgArrow = `
<svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" fill="none"><path d="M1 1l4.5 4.5L10 1" stroke="#161616" stroke-width="1.5"/></svg>
`

const HideList = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`

export const FloatingLabel = styled.label`
  position: absolute;
  bottom: 10px;
  left: 10px;
  transform: translateY(0px);
  transition: all var(--animation-duration);
  opacity: 0.7;

  &.checked {
    transform: translateY(-45px);
    color: ${({ theme }) => theme.accentColor};
  }
`

export const CurrentSelectBox = styled.div`
  position: relative;
  cursor: pointer;
  outline: none;

  border-bottom: 2px solid ${({ theme }) => theme.primary};
  min-height: 40px;
  background-color: ${({ theme }) => theme.lightBackground};

  &.checked {
    border-bottom-color: ${({ theme }) => theme.accentColor};
  }

  &.error {
    border-bottom-color: ${({ theme }) => theme.error};
  }
`

export const BoxValue = styled.div`
  display: flex;
`

export const Text = styled.p`
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: ${({ theme }) => theme.lightBackground};
`

export const Input = styled.input`
  display: none;

  &:checked {
    + ${Text} {
      display: block;
    }
  }
`

export const SelectBoxList = styled.ul`
  border: 1px solid ${({ theme }) => theme.primary};
  margin-top: 10px;

  position: absolute;
  width: 100%;
  padding: 0;
  list-style: none;
  opacity: 0;
  height: 150px;
  overflow: scroll;
  overflow-x: hidden;

  /* We need to use animation with delay.
     Otherwise the click event will not have time to run on label, because this element disapears immediately when CurrentSelectBox element loses the focus.
     This delay will not be noticed because we set "opacity" to "0".
     We also use "animation-fill-mode: forwards" to make the list stay hidden. */

  animation-name: ${HideList};
  animation-duration: 0.5s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  animation-timing-function: step-start;
`

export const ListItem = styled.li``

export const Label = styled.label``

export const HelpMsg = styled.span`
  display: block;
  color: ${({ theme }) => theme.error};
  padding-top: calc(${({ theme }) => theme.defaultPadding} / 2);
`

export const Arrow = styled.div`
  background-image: url('data:image/svg+xml;base64,${btoa(svgArrow)}');
  height: 30px;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  transition: 0.2s ease;
`

export const Container = styled.div`
  --animation-duration: 0.4s;

  position: relative;
  display: block;
  margin: 0 auto;
  color: ${({ theme }) => theme.primary};
  width: 100%;

  &.disbabled {
    opacity: 0.5;
    cursor: not-allowed;

    ${CurrentSelectBox} {
      pointer-events: none;
    }
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }

  ${CurrentSelectBox} {
    &:focus {
      & + ${SelectBoxList} {
        opacity: 1;

        /* We have to set "animation-name: none;" to make the list visible (read below how it works) */
        animation-name: none;

        ${Label} {
          cursor: pointer;
        }
      }

      ${Arrow} {
        transform: translateY(-50%) rotate(180deg);
      }

      ${HelpMsg} {
        display: none;
      }
    }
  }

  ${Label} {
    display: block;
    padding: 15px;
    background-color: ${({ theme }) => theme.lightBackground};
    transition: var(--animation-duration) all;

    &:hover,
    &:focus {
      color: ${({ theme }) => theme.primary};
      background-color: ${({ theme }) => theme.hoverColor};
    }
  }
`
