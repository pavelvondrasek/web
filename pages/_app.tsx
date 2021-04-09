import GlobalStyle from "components/GlobalStyle";
import theme from "components/theme";
import { AppProps } from "next/app";
import React from "react";
import { ThemeProvider, Preflight } from "@xstyled/emotion";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight/>
      <GlobalStyle/>
      <Component {...pageProps}/>
    </ThemeProvider>
  );
}

export default App;
