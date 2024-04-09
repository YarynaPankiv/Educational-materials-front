import { createGlobalStyle } from "styled-components";
import Head from 'next/head';

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif; /* Apply Montserrat font to the entire body */
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head/>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
