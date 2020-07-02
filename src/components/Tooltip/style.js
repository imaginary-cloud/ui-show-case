import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`

export const Container = styled.div`
  position: relative;
  display: inline-flex;
  user-select: none;
  cursor: pointer;
  margin: 0 10px;
  -webkit-tap-highlight-color: transparent;
`

export const Arrow = styled.span`
  position: absolute;
  width: 0;
  height: 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-style: solid;
  }

  &:before {
    bottom: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    border-width: 10px 12.5px 0 12.5px;
    border-color: ${({ theme }) => theme.primary} transparent transparent
      transparent;
  }
  &:after {
    bottom: 21.5px;
    transform: translateX(-50%);
    border-width: 9px 11.5px 0 11.5px;
    border-color: #ffffff transparent transparent transparent;
  }
`

export const Content = styled.div`
  color: #ffffff;
  position: absolute;
  z-index: 10;
  padding: 12px;
  font-size: 12px;
  cursor: default;
  border-radius: 3px;
  white-space: nowrap;
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.16);
  animation: ${fadeIn} ease-in-out 0.65s;

  &.top {
    bottom: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);

    ${Arrow} {
      &.top {
        bottom: -27px;
        /* bottom: -50%; */
        left: 50%;
        transform: translateY(-50%);
      }
    }
  }

  &.right,
  &.left {
    top: calc(100% - 40px);
  }

  &.right {
    left: calc(100% + 18px);

    ${Arrow} {
      transform: rotate(90deg) translateY(50%);
      left: -28.5px;
      top: 50%;
    }
  }

  &.left {
    right: calc(100% + 18px);

    ${Arrow} {
      transform: rotate(-90deg) translateY(50%);
      right: -28.5px;
      top: 50%;
    }
  }

  &.bottom {
    top: calc(100% + 18px);
    left: 100%;
    transform: translateX(-50%);

    ${Arrow} {
      left: calc(50% - 10px);
      transform: rotate(178deg);
      top: -28.5px;
    }
  }
`

export const Toggle = styled.div`
    background: red;
    width: 50px;
    height: 80px;
    position: absolute;
    left: -10px;
    top: 0;
}
`
