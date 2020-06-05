import styled from 'styled-components'

export const Label = styled.label``

export const Input = styled.input`
  opacity: 0;

  + ${Label} {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding-left: 2rem;

    &::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      position: absolute;
      left: 0;

      border-radius: 50%;
      border: 1px solid #6f686a;
    }

    &::after {
      content: '';
      position: absolute;
      left: 5px;

      border-radius: 50%;
      width: 12px;
      height: 12px;
    }
  }

  &:checked {
    + ${Label}::after {
      background: red;
    }
  }

  &:focus {
    + label::before {
      box-shadow: 0 0px 8px red;
    }
  }
`

export const Container = styled.div`
  user-select: none;
`
