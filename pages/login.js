import Header from "@/components/Header";
import React from "react";
import styled from "styled-components";
import LoginButton from "@/components/LoginButton";
import MyInput from "@/components/MyInput";

const LoginPage = ({ toggleDarkMode }) => {
  return (
    <Page>
      <Header toggleDarkMode={toggleDarkMode} />
      <Container>
        <FirstHalf>
          <Text>Ви користувач?</Text>
          <InputWrapper>
            <MyInput text={"Електронна пошта"} type={"email"} />
          </InputWrapper>
          <InputWrapper>
            <MyInput text={"Пароль"} type={"password"} />
          </InputWrapper>
          <Wrapper>
            <LoginButton>УВІЙТИ</LoginButton>
          </Wrapper>
        </FirstHalf>
        <SecondHalf>
          <Text>Це ваш перший візит?</Text>
          <Wrapper>
            <LoginButton>ЗАРЕЄСТРУВАТИСЬ</LoginButton>
          </Wrapper>
        </SecondHalf>
      </Container>
    </Page>
  );
};

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
  height: 100vh;
`;

const FirstHalf = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 140px 24px;
`;

const SecondHalf = styled.div`
  width: 50%;
  height: 100%;
  background: #d9d9d93d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  padding: 140px 24px;
`;

const Text = styled.div`
  font-family: Rubik Mono One;
  font-size: 20px;
  text-align: left;
`;

export default LoginPage;
