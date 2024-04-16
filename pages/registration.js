import Header from "@/components/Header";
import React, { useState } from "react";
import styled from "styled-components";
import LoginButton from "@/components/LoginButton";
import MyInput from "@/components/MyInput";
import { useRouter } from "next/router";

const RegisterPage = ({ toggleDarkMode }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const registerUser = () => {
    const user = {
      email: email,
      password: password,
      name: name,
      surname: surname,
    };
    router.push('/');
  };
  const goToLogin =()=>{
    router.push('/login');
  }

  return (
    <Page>
      <Header toggleDarkMode={toggleDarkMode} />
      <Container>
        <SecondHalf>
          <Text>Ви користувач?</Text>
          <Wrapper>
            <LoginButton  onClick={goToLogin} >УВІЙТИ</LoginButton>
          </Wrapper>
        </SecondHalf>
        <FirstHalf>
          <Text>Це ваш перший візит?</Text>
          <InputWrapper>
            <MyInput
              text={"Електронна пошта"}
              type={"email"}
              value={email}
              setValue={setEmail}
            />
          </InputWrapper>
          <NameWrap>
            <MyInput
              text={"Ім'я"}
              type={"text"}
              value={name}
              setValue={setName}
            />
            <MyInput
              text={"Прізвище"}
              type={"text"}
              value={surname}
              setValue={setSurname}
            />
          </NameWrap>
          <InputWrapper>
            <MyInput
              text={"Пароль"}
              type={"password"}
              value={password}
              setValue={setPassword}
            />
          </InputWrapper>
          <Wrapper>
            <LoginButton onClick={registerUser} href={'/'} >ЗАРЕЄСТРУВАТИСЬ</LoginButton>
          </Wrapper>
        </FirstHalf>
      </Container>
    </Page>
  );
};

const NameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 500px;
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

export default RegisterPage;
