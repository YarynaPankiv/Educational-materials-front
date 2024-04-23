import styled from "styled-components";
import Center from "./Center";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";

export const StyledDiv = styled.div`
  width: 250px;
  height: 240px;
  background-color: #ffffff;
  background: linear-gradient(0deg, #ffffff, #ffffff), #fcfafa;
  border: 1px solid #000000;
  z-index: 20;
  padding: 5px 20px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100%;
  align-items: center; 


`;
const StyledP = styled.p`

`
export const StyledInput = styled.input`
  border: none; 
  border-bottom: 1px solid #000; 
  outline: none; 
  font-family: inherit; 
  padding: 5px 0; 
  background: transparent; 
  width: 100%; 
`;

const StyledButton = styled.button`
  margin-top: 15px;
  width: 112px;
  height: 36px;
  background: #ad88c6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #fdfbfb;
  border: none;
  cursor: pointer;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  margin-top: 20px;
`

export default function PriceSort({ onSort }) {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    const handleSort = () => {
        if (!isNaN(parseFloat(minPrice)) && !isNaN(parseFloat(maxPrice))) {
            onSort(parseFloat(minPrice), parseFloat(maxPrice));
        }
    };

    return (
        <>
            <StyledDiv>
                <Div>
                    <div>
                        <StyledP>Ціна від</StyledP>
                        <StyledInput value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                    </div>
                    <div>
                        <StyledP>Ціна до</StyledP>
                        <StyledInput value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                    <StyledButton onClick={handleSort}>Сортувати</StyledButton>

                </Div>
            </StyledDiv>
        </>
    );
}
