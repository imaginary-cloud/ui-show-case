import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './style'

// to use in the storybook
export const theme = {
  primary: '#161616',
  secondary: '#3B3737',

  white: '#F6F4F5',
  blue: '#BED7E4',
  accentColor: '#ED9170',

  lightBackground: '#F6F4F5',

  error: '#EA6161',

  // spacing
  defaultPadding: '16px',
  defaultLineHeight: '28px',
  defaultFontSize: '14px',
  defaultBorderHeight: '1.5px',

  hoverColor: '#E89070;',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h1>ic-ui-show-case</h1>
    </ThemeProvider>
  )
}

export default App
