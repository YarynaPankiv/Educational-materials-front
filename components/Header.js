import styled from "styled-components";
import Center from "./Center";
import Theme from "./headerComponents.js/theme";
import Cart from "./headerComponents.js/cart";
import Account from "./headerComponents.js/account";
import CategoriesButton from "./headerComponents.js/CategoriesButton";
import DropDownWrap from "./DropDownWrap";
import LoginButton from "./LoginButton";
import { useRouter } from "next/router";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { mongooseConnect } from "@/lib/mongoose";
import CartDropDownWrap from "@/components/CartDropDown"
import ShoppingCart from "./ShoppingCart";
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
  font-family: "Rubik Mono One", sans-serif;
  font-size: 11px;
  user-select: none;
`;

const AllIcons = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
const HeaderDiv = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

const LoginMenu = styled.div`
  max-width: 275px;
  height: 250px;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 10px 10px;
`;

const Line = styled.div`
  max-width: 275px;
  width: 100%;
  border: 1px solid #c9c9c9;
`;
const Text2 = styled.div`
  padding-top: 15px;
  padding-bottom: 5px;
  font-size: 16px;
  color: black;
  font-weight: 600;
`;
const ButtonWrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

export default function Header({ toggleDarkMode, categories, subcategories }) {
  const router = useRouter();

  const goToRegister = () => {
    router.push("/registration");
  };

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <header>
      <Center>
        <HeaderDiv>
          <CategoriesButton
            categories={categories}
            subcategories={subcategories}
          />

          <StyledSearch placeholder="Введіть текст для пошуку..."></StyledSearch>
          <AllIcons>
            <Theme toggleDarkMode={toggleDarkMode} />
            
            <ShoppingCart icon={<Cart></Cart>}/>

            <DropDownWrap icon={<Account />}>
              <LoginMenu>
                <Text2>Ви користувач?</Text2>
                <ButtonWrapper>
                  <LoginButton onClick={goToLogin}>УВІЙТИ</LoginButton>
                </ButtonWrapper>
                <Line />
                <Text2>Це ваш перший візит?</Text2>
                <ButtonWrapper>
                  <LoginButton onClick={goToRegister}>
                    ЗАРЕЄСТРУВАТИСЬ
                  </LoginButton>
                </ButtonWrapper>
              </LoginMenu>
            </DropDownWrap>
          
          </AllIcons>

          <DropDownWrap ></DropDownWrap>
        </HeaderDiv>
      </Center>
    </header>
  );
}
