import styled from 'styled-components'

const checkImage = `
<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 512 512">
  <defs/>
  <path fill="currentColor" d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.69l240.1-240.1c10-10 26.2-10 36.2 0l36.2 36.21c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z"/>
</svg>
`

export const Input = styled.input`
  position: absolute;
  height: 20px;
  width: 20px;

  left: 0;
  opacity: 0;
  top: 0;
`

export const Label = styled.label`
  padding-left: 30px;
  padding-top: 3px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;

  ${Input} + ${Label}::before {
    border: 2px solid;
    content: '';
    height: 20px;
    width: 20px;

    position: absolute;
    left: 0;
    top: 10px;
  }

  ${Input} + ${Label}::after {
    content: '';
    opacity: 0;
    background-image: url('data:image/svg+xml;utf8,${checkImage}');
    background-repeat: no-repeat;
    height: 15PX;
    width: 15PX;

    position: absolute;
    left: 5px;
    top: 15px;
    transition: opacity 0.2s ease-in-out;
  }

  ${Input}:checked + ${Label}::after {
    opacity: 1;
  }

  ${Input}:focus + ${Label}::before {
    outline: 3px solid transparent; /* For Windows high contrast mode. */
  }
`
