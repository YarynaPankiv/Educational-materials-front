import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import MyInput from "./Login/MyInput";
import LoginButton from "./Login/LoginButton";
import { useAuth } from "@/Contexts/AccountContext";
import Center from "./Center";


const UserEditor = ({darkTheme}) => {
  const { user } = useAuth(); // Отримання поточного користувача з контексту
  const { setUser } = useAuth();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [emailField, setEmailField] = useState("");
  const [userId, setUserId] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(user);
      setName(user.data.name);
      setSurname(user.data.surname);
      setPassword(user.data.password);
      setEmailField(user.data.email);
      setUserId(user.data._id);
    }
  }, [user]);

  const saveData = async () => {
    try {
      const response = await axios.put(`/api/loginUser?_id=${userId}`, {
        _id: userId,
        email: emailField,
        name,
        surname,
        password,
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log("User data updated:", response.data);
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const savePassword = async () => {
    
    if(checkPassword === newPassword && checkPassword!=='' ){
      setIsError(false)
    try {
      const response = await axios.put(`/api/loginUser?_id=${userId}`, {
        _id: userId,
        email: emailField,
        name,
        surname,
        password: newPassword,
      });
      setUser(response.data);
      localStorage.setItem('user', JSON.stringify(response.data));
      console.log("Password updated:", response.data);
    } catch (error) {
      console.error("Error updating password:", error);
    }
  } else {
     setIsError(true)
        }
  };

  return (
    <Center>
      <Page>
        <InputWrapper>
          <Text darkTheme={darkTheme}>Дані користувача</Text>
          <InputContainer>
            <MyInput
              darkTheme={darkTheme}
              text={"Адреса електронної пошти"}
              type={"email"}
              value={emailField}
              setValue={setEmailField}
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
                darkTheme={darkTheme}
              />
              <MyInput
                text={"Прізвище"}
                type={"text"}
                value={surname}
                setValue={setSurname}
                theme="common"
                placeholder="Прізвище"
                darkTheme={darkTheme}
              />
            </NameWrap>
          </InputContainer>
        </InputWrapper>
        <LoginButton onClick={saveData} darkTheme={darkTheme}>Змінити дані користувача</LoginButton>
        <InputWrapper>
          <InputContainer>
            <Text darkTheme={darkTheme}>Пароль</Text>
            <MyInput
              text={"Поточний пароль"}
              type={"text"}
              value={password}
              setValue={setPassword}
              theme="common"
              darkTheme={darkTheme}
            />
          </InputContainer>
          <InputContainer>
            <MyInput
              text={"Новий пароль"}
              type={"password"}
              value={newPassword}
              setValue={setNewPassword}
              theme="common"
              darkTheme={darkTheme}
            />
          </InputContainer>
          <InputContainer>
            <MyInput
              text={"Повторити новий пароль"}
              type={"password"}
              value={checkPassword}
              setValue={setCheckPassword}
              theme="common"
              darkTheme={darkTheme}
              errorMessage={isError && checkPassword!==newPassword ? "Passwords are not the same": ''} />
          </InputContainer>
        </InputWrapper>
        <LoginButton onClick={savePassword} darkTheme={darkTheme}>Змінити пароль</LoginButton>
      </Page>
    </Center>
  );
};

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: 5%;
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    width: 364px;
    margin-left: 8px;
    margin-right: 5px;
  }
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
  color: ${(props) => (props.darkTheme ? "#FFFFFF " : "black")};
`;

const InputContainer = styled.div`
  padding: 10px 0;
`;

const ButtonWrapper = styled.div`
  padding-top: 20px;
`;

export default UserEditor;
