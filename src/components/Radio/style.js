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
      width: 18px;
      height: 18px;
      position: absolute;
      left: 0;

      border-radius: 50%;
      border: ${({ theme }) => theme.defaultBorderHeight} solid;
      border-color: ${({ theme }) => theme.primary};
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-47%);
      left: 3px;
      border-radius: 50%;
      width: 15px;
      height: 15px;
    }
  }

  &:checked {
    + ${Label}::after {
      background: ${({ theme }) => theme.accentColor};
    }
    + ${Label}::before {
      border-color: ${({ theme }) => theme.accentColor};
    }
  }

  &:disabled {
    + ${Label}::after {
      opacity: 0.4;
    }
    + ${Label}::before {
      opacity: 0.4;
    }
  }

  &:focus {
    + label::before {
      /* box-shadow: 0 0px 8px ${({ theme }) => theme.accentColor}; */
    }
  }
`

export const Container = styled.div`
  user-select: none;
  transition: all 0.4s;
`
