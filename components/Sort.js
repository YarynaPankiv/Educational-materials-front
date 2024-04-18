import styled from "styled-components";
import Center from "./Center";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const StyledDiv = styled.div`
  width: 250px;
  height: 225px;
  background-color: #FFFFFF;
  position: absolute;
  left: 166px;
  top: 190px;
  background: linear-gradient(0deg, #FFFFFF, #FFFFFF), #FCFAFA;
  border: 1px solid #000000;
  z-index: 10;

   
`
const Div = styled.div`
   margin-top: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

const StyledButton = styled.button`
  margin-top: 15px;
  width: 112px;
  height: 36px;
  background: #AD88C6;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  color: #FDFBFB;
  border: none;
  cursor: pointer;

  
   
`

export default function Sort(){
    return(
        <StyledDiv>
            <Div>
            <FormControl>
            <RadioGroup>
            <FormControlLabel value="Від найдешевших" control={<Radio />} label="Від найдешевших" />
            <FormControlLabel value="Від найдорожчих" control={<Radio />} label="Від найдорожчих" />
            <FormControlLabel value="Від найновіших" control={<Radio />} label="Від найновіших" />
            </RadioGroup>
            </FormControl>
            <StyledButton>Сортувати</StyledButton>
    

            </Div>
            
        </StyledDiv>

    )
}

