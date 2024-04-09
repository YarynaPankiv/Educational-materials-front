import styled from "styled-components"
import Center from "./Center";



const StyledButton = styled.button`
    margin-top: 25px;
    margin-right: 30px;
    width: 181px;
    height: 40px;
    background: #EFEFEF;
    border-radius: 30px;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    font-family: 'Montserrat', sans-serif;
`

export default function Buttons(){
    return(
        <Center>
             <StyledButton>Недавно додані</StyledButton>
             <StyledButton>Популярні</StyledButton>

        </Center>
        
    )
}