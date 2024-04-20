import Header from "@/components/Header";
import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "@/components/LoginButton";
import MyInput from "@/components/MyInput";
import { useRouter } from "next/router";
import DropDownWrap from "@/components/DropDownWrap";

const LoginPage = ({ toggleDarkMode }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = () => {
    const user = {
      email: email,
      password: password,
    };
    router.push("/");
  };
  const goToRegister = () => {
    router.push("/registration");
  };
  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <Page>
      <Header toggleDarkMode={toggleDarkMode} />
      <Container>
        <FirstHalf>
          <Text>Ви користувач?</Text>
          <InputWrapper>
            <MyInput
              text={"Електронна пошта"}
              type={"email"}
              value={email}
              setValue={setEmail}
            />
          </InputWrapper>
          <InputWrapper>
            <MyInput
              text={"Пароль"}
              type={"password"}
              value={password}
              setValue={setPassword}
            />
          </InputWrapper>
          <Wrapper>
            <LoginButton onClick={loginUser} href={"/"}>
              УВІЙТИ
            </LoginButton>
          </Wrapper>
        </FirstHalf>
        <SecondHalf>
          <Text>Це ваш перший візит?</Text>
          <Wrapper>
            <LoginButton onClick={goToRegister}>ЗАРЕЄСТРУВАТИСЬ</LoginButton>
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
