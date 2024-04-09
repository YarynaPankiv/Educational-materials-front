import styled from "styled-components";
import Center from "./Center";

const StyledIcon = styled.svg`
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


const IconWithText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Вирівнювання вмісту по вертикалі */
`;

const IconText = styled.p`
margin-top: 0px;
  margin-left: 8px; /* Додано відступ зліва */
  font-family: 'Rubik Mono One', sans-serif;
  font-size: 11px;
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

export default function Header() {
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
          <IconWithText>
            <StyledIcon
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </StyledIcon>
            <IconText>Тема</IconText>
          </IconWithText>
          <IconWithText>

          <StyledIcon
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.70274 14.3831H17.7706C18.1066 14.3831 18.4 14.0937 18.4 13.7048C18.4 13.3159 18.1066 13.0266 17.7706 13.0266H7.84923C7.35747 13.0266 7.05565 12.6647 6.97798 12.1134L6.83995 11.1639H17.7875C19.0471 11.1639 19.6942 10.3499 19.8753 9.05708L20.5654 4.27352C20.5837 4.15993 20.5953 4.04526 20.6 3.93016C20.6 3.49614 20.2894 3.19752 19.8149 3.19752H5.72723L5.56307 2.04938C5.47693 1.35301 5.23547 1 4.35575 1H1.32716C0.982266 1 0.688904 1.31713 0.688904 1.67901C0.688904 2.04938 0.982266 2.36612 1.32753 2.36612H4.24312L5.62343 12.2943C5.8049 13.5783 6.45162 14.3831 7.70274 14.3831ZM19.1332 4.56288L18.5215 8.89427C18.4523 9.45484 18.1677 9.79859 17.6587 9.79859L6.65075 9.80746L5.91716 4.56288H19.1332ZM8.38443 18.7777C8.56839 18.7793 8.75081 18.7425 8.92106 18.6695C9.09132 18.5964 9.24599 18.4886 9.37608 18.3522C9.50616 18.2159 9.60905 18.0538 9.67875 17.8753C9.74845 17.6969 9.78356 17.5057 9.78204 17.3128C9.78282 17.1202 9.7472 16.9294 9.67724 16.7513C9.60728 16.5732 9.50436 16.4114 9.37443 16.2752C9.24449 16.139 9.09011 16.0311 8.92019 15.9578C8.75027 15.8845 8.56818 15.8471 8.38443 15.848C7.59967 15.848 6.97835 16.4992 6.97835 17.3128C6.97835 18.1358 7.59967 18.7777 8.38443 18.7777ZM16.4506 18.7777C17.2357 18.7777 17.8567 18.1358 17.8567 17.3128C17.8567 16.4988 17.2357 15.848 16.4506 15.848C15.6743 15.848 15.0445 16.4992 15.0445 17.3128C15.0445 18.1358 15.6743 18.7777 16.4506 18.7777Z"
              fill="black"
              stroke="black"
            />
            
          </StyledIcon>
          <IconText>Корзина</IconText>

          </IconWithText>
          <IconWithText>
          <StyledIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </StyledIcon>
          <IconText>Акаунт</IconText>

          </IconWithText>

          
        </AllIcons>


        </HeaderDiv>
        
      </Center>
    </header>
  );
}
