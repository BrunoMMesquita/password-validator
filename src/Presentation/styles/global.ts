import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 800px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background: ${props => props.theme.colors.background};
  }

  h1,
  input,
  button {
    font-family: 'Roboto', sans-serif;
  }

  h1 {
    color: ${props => props.theme.colors.text};
  }
`
