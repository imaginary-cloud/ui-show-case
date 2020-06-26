import styled from 'styled-components'

export const FormField = styled.div`
  --animation-duration: 0.4s;

  display: block;
  margin-bottom: 16px;
  width: calc(100% - 24px);
`

export const FormFieldControl = styled.div`
  border-radius: 3px 3px 0 0;
  overflow: hidden;
  position: relative;
  width: 100%;
  cursor: pointer;
`

export const Label = styled.label`
  font-size: 1.2rem;
  transform: translateY(15px);
  line-height: ${({ theme }) => theme.defaultLineHeight};
  font-size: ${({ theme }) => theme.defaultFontSize};

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
export const Bar = styled.div`
  border-bottom: ${({ theme }) => theme.defaultBorderHeight} solid;
  border-color: ${({ theme }) => theme.primary};
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

export const InputItem = styled.input.attrs(({ hasError }) => ({
  hasError,
}))`
  appearance: none;
  background: transparent;
  border: 0;
  border-bottom: ${({ theme }) => theme.defaultBorderHeight} solid
    ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  display: block;
  font-size: 1.2rem;
  margin-top: 24px;
  outline: 0;
  padding: 0 12px 10px 12px;
  padding-top: 10px;
  width: 100%;
  background: ${({ theme }) => theme.lightBackground};

  // IE 10-11
  &:-ms-input-placeholder {
    ~ ${Label} {
      font-size: 1.2rem;
      transform: translateY(15px);
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
      border-bottom: ${({ theme }) => theme.defaultBorderHeight} solid
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
      border-bottom: ${({ theme }) => theme.defaultBorderHeight} solid
        ${({ theme }) => theme.accentColor};
      transform: scaleX(150);
    }
    caret-color: ${({ theme }) => theme.accentColor};
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
