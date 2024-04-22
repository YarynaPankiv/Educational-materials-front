import { useState } from "react";
import styled from "styled-components";
import MyInput from "./MyInput";
import LoginButton from "./LoginButton";
import { useRouter } from "next/router";

const UserEditor = () => {
  const router = useRouter();

  const saveData = () => {
    const user = {
      email: email,
      name: name,
      surname: surname,
    };
    router.push("/");
  };

  const savePassword = () => {
    if(newPassword === checkPassword){
    const user = {
      password: password,
      newPassword: newPassword,
    };
    router.push("/");
  }else
  alert("пароль не співпадає з новим паролем")
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  return (
    <Page>
      <InputWrapper>
        <Text>Дані користувача</Text>
        <InputContainer>
          <MyInput
            text={"Адреса електронної пошти"}
            type={"email"}
            value={email}
            setValue={setEmail}
            theme="common"
          />
        </InputContainer>
        <InputContainer>
          <NameWrap>
            <MyInput
              text={"Ім'я"}
              type={"text"}
              value={name}
              setValue={setName}
              theme="common"
            />
            <MyInput
              text={"Прізвище"}
              type={"text"}
              value={surname}
              setValue={setSurname}
              theme="common"
              placeholder="Прізвище"
            />
          </NameWrap>
        </InputContainer>
      </InputWrapper>
      <LoginButton onClick={saveData}>Змінити дані користувача</LoginButton>
      <InputWrapper>
        <InputContainer>
          <Text>Пароль</Text>
          <MyInput
            text={"Поточний пароль"}
            type={"password"}
            value={password}
            setValue={setPassword}
            theme="common"
          />
        </InputContainer>
        <InputContainer>
          <MyInput
            text={"Новий пароль"}
            type={"password"}
            value={newPassword}
            setValue={setNewPassword}
            theme="common"
          />
        </InputContainer>
        <InputContainer>
          <MyInput
            text={"Повторити новий пароль"}
            type={"password"}
            value={checkPassword}
            setValue={setCheckPassword}
            theme="common"
          />
        </InputContainer>
      </InputWrapper>
      <LoginButton onClick={savePassword}>Змінити пароль</LoginButton>
    </Page>
  );
};

const Page = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NameWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  max-width: 500px;
`;

const InputWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 30px 0;
`;

const Text = styled.div`
  font-weight: bold;
  font-size: 16px;
  padding-bottom: 20px;
`;

const InputContainer = styled.div`
  padding: 10px 0;
`;
export default UserEditor;
