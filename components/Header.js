import styled from "styled-components";
import Center from "./Center";
import Theme from "./headerComponents.js/theme";
import Cart from "./headerComponents.js/cart";
import Account from "./headerComponents.js/account";

export const StyledIcon = styled.svg`
  width: 21px;
  height: 20px;

`;

const StyledButton = styled.button`
  width: 146px;
  height: 34px;
  padding: 0; /* Змінено padding на 0 */
  background-color: #ffffff;
  border-radius: 10px;
  border: 2px solid #7469b6;
  display: flex; /* Додано display: flex для роботи зі внутрішнім контентом */
  align-items: center; /* Вирівнювання вмісту по вертикалі */
  color: #7469b6;
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledSVG = styled.svg`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
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
        <StyledButton>
          <StyledSVG
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.19086 15.1818H22.2686C22.9588 15.1818 23.5234 14.6487 23.5234 13.997C23.5234 13.3453 22.9588 12.8121 22.2686 12.8121H2.19086C1.50068 12.8121 0.935997 13.3453 0.935997 13.997C0.935997 14.6487 1.50068 15.1818 2.19086 15.1818ZM2.19086 9.25759H22.2686C22.9588 9.25759 23.5234 8.72441 23.5234 8.07274C23.5234 7.42108 22.9588 6.8879 22.2686 6.8879H2.19086C1.50068 6.8879 0.935997 7.42108 0.935997 8.07274C0.935997 8.72441 1.50068 9.25759 2.19086 9.25759ZM0.935997 2.1485C0.935997 2.80017 1.50068 3.33335 2.19086 3.33335H22.2686C22.9588 3.33335 23.5234 2.80017 23.5234 2.1485C23.5234 1.49684 22.9588 0.963654 22.2686 0.963654H2.19086C1.50068 0.963654 0.935997 1.49684 0.935997 2.1485Z"
              fill="#7469B6"
            />
          </StyledSVG>
          Категорії
        </StyledButton>

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
