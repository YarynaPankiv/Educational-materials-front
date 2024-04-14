import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import React, { useState } from "react";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background-color: ${(props) =>
      props.darkMode
        ? "#121212"
        : "#FFFFFF"}; /* Змінити колір фону в залежності від теми */
    color: ${(props) =>
      props.darkMode
        ? "#FFFFFF"
        : "#000000"}; /* Змінити колір тексту в залежності від теми */
  }
`;

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Head />
      <GlobalStyles darkMode={darkMode} />
      <Component {...pageProps} toggleDarkMode={toggleDarkMode} />
    </>
  );
}
