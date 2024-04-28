import Header from "@/components/Header";
import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "@/components/Login/LoginButton";
import MyInput from "@/components/Login/MyInput";
import { useRouter } from "next/router";
import axios from "axios";
import LogoWithoutPurple from "@/components/Logo/LogoWithoutPurple";
import { useAuth } from "@/Contexts/AccountContext";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import Urls from "@/components/Urls";

const RegisterPage = ({ toggleDarkMode, categories, subcategories }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const { login, isAuthenticated } = useAuth();

  async function registerUser() {
    if (!name || !surname || !email || !password) {
      console.error("Please fill in all fields.");
      return;
    }
    try {
      const checkUser = await axios.get(`/api/registerUser`, {
        email: email,
      });
      if (!checkUser.data.success) {
        alert("User with this email already exists.");
        return;
      }
      const newUser = await axios.post("/api/registerUser", {
        name: name,
        surname: surname,
        email: email,
        password: password,
      });
      login(newUser.data);
      console.log(newUser);
      router.push("/user-profile/user-info");
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }

   const goToLogin = () => {
    router.push("/login");
  };

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} categories={categories} subcategories={subcategories} />
      <Urls page={"Зареєструватись"} />
      <Page>
        <LogoWrapper>
          <LogoWithoutPurple />
        </LogoWrapper>
        <Container>
          <FirstHalf>
            <Text>Це ваш перший візит?</Text>
            <InputWrapper>
              <MyInput text={"Електронна пошта"} type={"email"} value={email} setValue={setEmail} theme="auth" required />
            </InputWrapper>
            <NameWrap>
              <MyInput text={"Ім'я"} type={"text"} value={name} setValue={setName} theme="auth" />
              <MyInput text={"Прізвище"} type={"text"} value={surname} setValue={setSurname} theme="auth" />
            </NameWrap>
            <InputWrapper>
              <MyInput text={"Пароль"} type={"password"} value={password} setValue={setPassword} theme="auth" />
            </InputWrapper>
            <Wrapper>
              <LoginButton onClick={registerUser}>ЗАРЕЄСТРУВАТИСЬ</LoginButton>
            </Wrapper>
          </FirstHalf>
          <SecondHalf>
            <Text>Ви користувач?</Text>
            <Wrapper>
              <LoginButton onClick={goToLogin}>УВІЙТИ</LoginButton>
            </Wrapper>
          </SecondHalf>
        </Container>
      </Page>
    </>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputWrapper = styled.div`
  max-width: 500px;
  width: 100%;
`;

const Wrapper = styled.div`
  max-width: 300px;
  width: 100%;
`;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex: 1;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const FirstHalf = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
  }
`;

const SecondHalf = styled.div`
  flex: 1;
  background: #d9d9d93d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 40px;

  @media only screen and (max-width: 600px) {
    padding: 20px;
    
  }
`;

const Text = styled.div`
  font-family: Rubik Mono One;
  font-size: 20px;
  text-align: left;
`;

const NameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 500px;
`;

export async function getServerSideProps() {
  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});
  return {
    props: {
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
    },
  };
}

export default RegisterPage;
