import styled, { keyframes } from 'styled-components'

const svgArrow = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.85 451.85">
      <defs />
      <path d="M225.92 354.7c-8.1 0-16.2-3.09-22.37-9.26L9.27 151.16a31.64 31.64 0 1144.75-44.75l171.9 171.91 171.9-171.9a31.64 31.64 0 0144.75 44.74L248.3 345.45a31.55 31.55 0 01-22.37 9.26z" />
    </svg>
`

const HideList = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`

export const CurrentSelectBox = styled.div`
  position: relative;
  box-shadow: 0 15px 30px -10px rgba(#000, 0.9);
  cursor: pointer;
  outline: none;
`

export const BoxValue = styled.div`
  display: flex;
`

export const Text = styled.p`
  display: none;
  width: 100%;
  margin: 0;
  padding: 15px;
  background-color: #fff;
`

export const Input = styled.input`
  display: none;

  &:checked + ${Text} {
    display: block;
  }
`

export const SelectBoxList = styled.ul``

export const ListItem = styled.ul``

export const Label = styled.label``

export const Arrow = styled.div`
  background-image: url('data:image/svg+xml;base64,${btoa(svgArrow)}');
  background-size: 100%;
  height: 30px;
  background-repeat: no-repeat;
  background-position: center center;

  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
  width: 20px;
  opacity: 0.3;
  transition: 0.2s ease;
`

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  margin: 0 auto;
  font-family: 'Open Sans', 'Helvetica Neue', 'Segoe UI', 'Calibri', 'Arial',
    sans-serif;
  font-size: 18px;
  color: #60666d;

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
    }
  }

  ${SelectBoxList} {
    position: absolute;
    width: 100%;
    padding: 0;
    list-style: none;
    opacity: 0;

    /* We need to use animation with delay.
     Otherwise the click event will not have time to run on label, because this element disapears immediately when CurrentSelectBox element loses the focus.
     This delay will not be noticed because we set "opacity" to "0".
     We also use "animation-fill-mode: forwards" to make the list stay hidden. */

    animation-name: ${HideList};
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    animation-timing-function: step-start;
    box-shadow: 0 15px 30px -10px rgba(#000, 0.9);
  }

  ${Label} {
    display: block;
    padding: 15px;
    background-color: #fff;

    &:hover,
    &:focus {
      color: #546c84;
      background-color: #fbfbfb;
    }
  }
`
