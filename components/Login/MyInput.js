import { use, useMemo, useState } from "react";
import styled from "styled-components";

const MyInput = ({ text, type, value, setValue, theme, errorMessage, darkTheme }) => {
  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  const ThemedInput = useMemo(() => {
    switch (theme) {
      case "auth":
        return AuthInput;
      case "common":
        return CommonInput;
      default:
        return CommonInput;
    }
  }, [theme]);

  return (
    <Label>
      <div>{text}</div>
      <ThemedInput onChange={handleOnChange} value={value} type={type} darkTheme={darkTheme}/>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Label>
  );
};

const ErrorMessage = styled.div`
  position: absolute;
  top: calc(100% + 16px);
  left: 0;
  color: red;
  font-size: small;
`;


const Label = styled.label`
  width: 100%;
  position: relative;
`;

const CommonInput = styled.input`
  padding: 10px 20px;
  width: 100%;
  font-size: 16px;
  height: 36px;
  margin-top: 10px;
  text-align: center;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "black")};
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "white")};
  
`;

const AuthInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 20px 20px 5px 20px;
  outline: none;
  width: 100%;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
  color: ${(props) => (props.darkTheme ? "#FFFFFF" : "black")};
  opacity:${(props) => (props.darkTheme ? "60%" : "100%")};
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "white")};
`;

export default MyInput;
