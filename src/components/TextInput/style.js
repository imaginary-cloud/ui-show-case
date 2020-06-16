import styled from 'styled-components'

export const FormField = styled.div`
  --animation-duration: 0.4s;

  display: block;
  margin-bottom: 16px;
  width: calc(100% - 24px);
  &:hover {
    cursor: pointer;
  }
`

export const FormFieldControl = styled.div`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const Label = styled.label`
  font-size: 1.2rem;
  transform: translateY(0);

  display: block;
  font-weight: normal;
  left: 0;
  margin: 0;
  padding: 18px 12px 0;
  position: absolute;
  top: 0;
  transition: all var(--animation-duration);
  width: 100%;
`

// adding custom props to native components
// https://spectrum.chat/styled-components/general/how-to-pass-custom-props-to-native-elements~69a20d04-1a8a-4fe4-927f-225dae003fd3
export const Bar = styled.div.attrs(({ hasError }) => ({
  hasError,
}))`
  border-bottom: 2px solid
    ${({ hasError, theme }) => (hasError ? theme.error : theme.primary)};
  bottom: 0;
  content: '';
  display: block;
  left: 0;
  margin: 0 auto;
  position: absolute;
  right: 0;
  transform: scaleX(0);
  transition: all var(--animation-duration);
  width: 1%;
`

export const InputItem = styled.input`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  color: #333;
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  width: 100%;

  // IE 10-11
  &:-ms-input-placeholder {
    ~ ${Label} {
      font-size: 1.2rem;
      transform: translateY(0);
    }
  }
  // All other browsers except Edge
  &:not(:placeholder-shown),
  &:-webkit-autofill {
    ~ ${Label} {
      font-size: 0.75rem;
      transform: translateY(-14px);
      color: ${({ theme }) => theme.accentColor};
    }

    ~ ${Bar} {
      border-bottom: 2px solid
        ${({ theme, hasError }) => (hasError ? theme.error : theme.primary)};
      transform: scaleX(150);
    }
  }

  &:focus {
    ~ ${Label} {
      color: ${({ theme }) => theme.accentColor};
      font-size: 0.75rem;
      transform: translateY(-14px);
    }
    ~ ${Bar} {
      border-bottom: 2px solid ${({ theme }) => theme.accentColor};
      transform: scaleX(150);
    }
  }

  &:disabled {
    ~ ${Label} {
      opacity: 0.2;
    }
  }
`

export const Help = styled.span.attrs(({ hasError }) => ({
  hasError,
}))`
  margin: 8px;
  display: block;
  color: ${({ theme, hasError }) => (hasError ? theme.error : theme.primary)};
`
