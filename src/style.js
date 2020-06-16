import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #161616;
    --secondary: #3B3737;

    --white: #F6F4F5;
    --blue: #BED7E4;
    --accent-color: #ED9170;

    --error: #EA6161;
  }

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
