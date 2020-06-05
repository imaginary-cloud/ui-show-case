import styled from 'styled-components'

const checkImage = `
<svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" viewBox="0 0 512 512">
  <defs/>
  <path fill="yellowgreen" d="M173.9 439.4L7.5 273c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.69l240.1-240.1c10-10 26.2-10 36.2 0l36.2 36.21c10 10 10 26.2 0 36.2L210.1 439.4c-10 10-26.2 10-36.2 0z"/>
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
  position: relative;

  ${Input} + ${Label}::before {
    border: 2px solid;
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    width: 20px;
    height: 20px;
  }

  ${Input} + ${Label}::after {
    content: '';
    opacity: 0;
    background-image: url('data:image/svg+xml;utf8,${checkImage}');
    background-repeat: no-repeat;
    height: 15px;
    width: 15px;

    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease-in-out;
  }

  ${Input}:checked + ${Label}::after {
    opacity: 1;
  }

  ${Input}:focus + ${Label}::before {
    box-shadow: 0 0 0 3px yellowgreen;
    outline: 3px solid transparent; /* For Windows high contrast mode. */
  }
`
