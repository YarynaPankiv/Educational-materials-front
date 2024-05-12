import styled from "styled-components";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useState } from "react";

export default function Sort({ chooseType, sortProducts, filter, darkTheme }) {
  const [chosenSortType, setChosenSortType] = useState(null);

  const handleClick = (type) => {
    setChosenSortType(type);
  };

  return (
    <StyledDiv darkTheme={darkTheme}>
      <Div>
        <FormControl>
          <RadioGroup>
            <StyledFormControlLabel
              value="Від найдешевших"
              control={<StyledRadio />}
              label="Від найдешевших"
              onClick={() => handleClick("priceAsc")}
            />
            <StyledFormControlLabel
              value="Від найдорожчих"
              control={<StyledRadio />}
              label="Від найдорожчих"
              onClick={() => handleClick("priceDesc")}
            />
            <StyledFormControlLabel
              value="Від найновіших"
              control={<StyledRadio />}
              label="Від найновіших"
              onClick={() => handleClick("new")}
            />
          </RadioGroup>
        </FormControl>
        <StyledButton
          darkTheme={darkTheme}
          onClick={() => {
            chooseType(chosenSortType);
            sortProducts(chosenSortType);
            filter();
          }}
        >
          Сортувати
        </StyledButton>
      </Div>
    </StyledDiv>
  );
}
export const StyledDiv = styled.div`
  width: 250px;
  height: 225px;
  background-color: ${(props) => (props.darkTheme ? "#26303B" : "#FFFFFF")};
  border: 1px solid #000000;
  z-index: 20;
`;
export const Div = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const StyledButton = styled.button`
  margin-top: 15px;
  width: 112px;
  height: 36px;
  background-color: ${(props) => (props.darkTheme ? "#732270" : "#ad88c6")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fdfbfb;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
`;
const StyledRadio = styled(Radio)`
  && {
    font-family: "Montserrat", sans-serif;
  }
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  && {
    font-family: "Montserrat", sans-serif;
  }
`;
