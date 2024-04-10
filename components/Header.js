import styled from "styled-components";
import Center from "./Center";
import Theme from "./headerComponents.js/theme";
import Cart from "./headerComponents.js/cart";
import Account from "./headerComponents.js/account";
import CategoriesButton from "./headerComponents.js/CategoriesButton";

export const StyledIcon = styled.svg`
  width: 21px;
  height: 20px;

`;




const StyledSearch = styled.input`
  width: 605px;
  height: 34px;
  background-color: #f5f5f5;
  border-radius: 30px;
  font-size: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0.64;
  padding: 0 15px;
  display: block;
  line-height: 34px;
  border: none;
  outline: none;
  margin-left: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
`;


export const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Вирівнювання вмісту по вертикалі */
  cursor: pointer;
`;

export const IconText = styled.p`
  margin-top: 0px;
  margin-left: 8px; /* Додано відступ зліва */
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 11px;
  user-select: none;
`;

const AllIcons = styled.div`
margin-top: 10px;
 display: flex;
 align-items: center;
`
const HeaderDiv = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 5px;
 `

export default function Header({ toggleDarkMode }) {
  return (
    <header>
      <Center>
        <HeaderDiv>
        <CategoriesButton />

        <StyledSearch placeholder="Введіть текст для пошуку...">

        </StyledSearch>
        <AllIcons>
          <Theme  toggleDarkMode={toggleDarkMode} />
          <Cart />
          <Account />

        </AllIcons>


        </HeaderDiv>
        
      </Center>
    </header>
  );
}
