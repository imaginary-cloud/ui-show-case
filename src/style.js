import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 16px;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
