// _app.js
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import { CartContextProvider } from "@/Contexts/CartContext";
import { CategoriesProvider } from "@/Contexts/CategoriesContext";
import { ShowCartProvider } from "@/Contexts/ShowCart";
import { AuthProvider } from "@/Contexts/AccountContext";
import { useState } from "react";
import { ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh;
    background-color: ${(props) =>
      props.theme
        ? "#15202B"
        : "#FFFFFF"}; /* Змінити колір фону в залежності від теми */
    color: ${(props) =>
      props.theme
        ? "#FFFFFF"
        : "#000000"}; /* Змінити колір тексту в залежності від теми */
  
  }

  #__next {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }) {

  const [darkTheme, setTheme] = useState(false);
  const toggleTheme = () => setTheme(!darkTheme);
  console.log(darkTheme)
  return (

      <AuthProvider>
        <ShowCartProvider>
          <CartContextProvider>
            <CategoriesProvider>
              <GlobalStyles theme={darkTheme}/>
              <Component {...pageProps} toggleTheme={toggleTheme} darkTheme={darkTheme}/>
              <Head />
            </CategoriesProvider>
          </CartContextProvider>
        </ShowCartProvider>
      </AuthProvider>
  
  );
}
