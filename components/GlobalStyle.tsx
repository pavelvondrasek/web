import { createGlobalStyle } from "@xstyled/emotion";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #__next {
    height: 100%;
  }
  
  body {
    font-size: 16px;
    font-family: 'Work Sans', sans-serif;
    color: #171717;
    line-height: 32px;
  }
`

export default GlobalStyle;
