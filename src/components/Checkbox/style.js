import styled from 'styled-components'

const checkImage = `
<svg width="14" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M.75 6.75l4 4 8.5-10" stroke="white" stroke-width="1.5"/>
</svg>
`

export const Input = styled.input`
  position: absolute;
  height: 18px;
  width: 18px;

  left: 0;
  opacity: 0;
  top: 0;
`

export const Label = styled.label`
  padding-left: 30px;
  padding-top: 3px;
  color: ${({ theme }) => theme.accentColor};
  user-select: none;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  ${Input} + ${Label}::before {
    border: ${({ theme }) => theme.defaultBorderHeight} solid;
    border-color: ${({ theme }) => theme.primary};
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 18px;
    height: 18px;
  }

  ${Input} + ${Label}::after {
    content: '';
    opacity: 0;
    background-image: url('data:image/svg+xml;utf8,${checkImage}');
    background-position: center;
    background-repeat: no-repeat;
    height: 18px;
    width: 18px;

    position: absolute;
    left: 2px;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease-in-out;
  }

  ${Input}:checked + ${Label}::after {
    opacity: 1;
    background-color: ${({ theme }) => theme.accentColor};
    border-color: ${({ theme }) => theme.accentColor};
  }

  ${Input}:checked + ${Label}:before {
    border-color: ${({ theme }) => theme.accentColor};
  }

  ${Input}:focus + ${Label}::before {
    outline: 3px solid transparent; /* For Windows high contrast mode. */
  }

  ${Input}:disabled + ${Label}:after, 
  ${Input}:disabled + ${Label}:before,
  ${Input}:disabled ~ ${Label} {
    opacity: 0.7;
  }
`
