import Header from "@/components/Header";
import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "@/components/Login/LoginButton";
import MyInput from "@/components/Login/MyInput";
import { useRouter } from "next/router";
import axios from "axios";
import { useAuth } from "@/Contexts/AccountContext";

const LoginPage = ({ toggleDarkMode }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const loginUser = async () => {
    if (!email || !password) {
      console.error("Please fill in all fields.");
      return;
    }
    try {
      // Здійснюємо запит до вашого API для перевірки користувача
      const response = await axios.post("/api/loginUser", {
        email: email,
        password: password,
      });

      if (response.data.success) {
        console.log("User logged in successfully.");
        login(response.data);
        router.push({
          pathname: "/user-profile/user-info",
          query: { email: email },
        });
      } else {
        console.error("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };
  const goToRegister = () => {
    router.push("/registration");
  };

  return (
    <Page>
    <Header toggleDarkMode={toggleDarkMode} />
      <LogoWithoutPurple / >
      <Container>
        <FirstHalf>
          <Text>Ви користувач?</Text>
          <InputWrapper>
            <MyInput
              text={"Електронна пошта"}
              type={"email"}
              value={email}
              setValue={setEmail}
              theme="auth"
            />
          </InputWrapper>
          <InputWrapper>
            <MyInput
              text={"Пароль"}
              type={"password"}
              value={password}
              setValue={setPassword}
              theme="auth"
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
