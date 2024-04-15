import { useState } from "react";
import styled from "styled-components";

const MyInput = ({ text, type, value, setValue }) => {

  const handleOnChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Label>
      <div>{text}</div>
      <StyledInput onChange={handleOnChange} value={value} type={type} />
    </Label>
  );
};

const Label = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  padding: 20px 20px 5px 20px;
  outline: none;
  width: 100%;
  font-family: "Times New Roman", Times, serif;
  font-size: 20px;
`;

export default MyInput;
