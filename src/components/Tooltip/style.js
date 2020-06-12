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
`

export const Content = styled.span`
  color: #ffffff;
  position: absolute;
  z-index: 10;
  padding: 12px;
  font-size: 12px;
  cursor: default;
  border-radius: 3px;
  white-space: nowrap;
  font-family: monospace;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.16);
  animation: ${fadeIn} ease-in-out 0.65s;

  &.sm {
    max-width: 23rem;
  }

  &.md {
    max-width: 40rem;
  }

  &.top {
    bottom: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);

    ${Arrow} {
      bottom: -8px;
      left: calc(50% - 10px);
      border-right: 10px solid transparent;
      border-top: 10px solid ${({ backgroundColor }) => backgroundColor};
      border-left: 10px solid transparent;
    }
  }

  &.right,
  &.left {
    top: 50%;
    transform: translateY(-50%);

    ${Arrow} {
      top: calc(50% - 10px);
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
    }
  }

  &.right {
    left: calc(100% + 18px);

    ${Arrow} {
      left: -8px;
      border-right: 10px solid ${({ backgroundColor }) => backgroundColor};
    }
  }

  &.left {
    right: calc(100% + 18px);

    ${Arrow} {
      right: -8px;
      border-left: 10px solid ${({ backgroundColor }) => backgroundColor};
    }
  }

  &.bottom {
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);

    ${Arrow} {
      top: -8px;
      left: calc(50% - 10px);
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${({ backgroundColor }) => backgroundColor};
      border-left: 10px solid transparent;
    }
  }
`
