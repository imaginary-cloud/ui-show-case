import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  :root {
    --primary: #161616;
    --secondary: #3B3737;

    --white: #F6F4F5;
    --blue: #BED7E4;
    --accent-color: #ED9170;
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
