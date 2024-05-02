import { useState } from "react";
import { IconText, IconWithText, StyledIcon } from "./Header";

export default function SeacrhIcon() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
    // Call the function to toggle dark mode in App.js
  };

  return (
    <IconWithText clicked={isClicked} onClick={handleClick}>
  
      <StyledIcon 
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 18C11.775 17.9996 13.4988 17.4054 14.897 16.312L19.293 20.708L20.707 19.294L16.311 14.898C17.405 13.4997 17.9996 11.7754 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18ZM10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4Z" fill="black"/>
      <path d="M11.4118 8.58599C11.7908 8.96599 11.9998 9.46799 11.9998 9.99999H13.9998C14.0007 9.47442 13.8974 8.95389 13.6959 8.46848C13.4944 7.98307 13.1987 7.54242 12.8258 7.17199C11.3118 5.65999 8.68683 5.65999 7.17383 7.17199L8.58583 8.58799C9.34583 7.82999 10.6558 7.83199 11.4118 8.58599Z" fill="black"/>
      </StyledIcon>

      <IconText>Пошук</IconText>
    </IconWithText>
  );
}
