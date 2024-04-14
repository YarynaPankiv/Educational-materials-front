import styled from "styled-components";

const LoginButton = ({ children }) => {
  return <Button>{children}</Button>;
};

const Button = styled.button`
  border: 2px solid #ad88c6;
  background-color: #ffffff;
  padding: 12px 24px;
  font-family: Rubik Mono One;
  font-size: 16px;
  color: #ad88c6;
  cursor: pointer;
  width: 100%;

  &:hover {
    background: #7469b6;
    border: 2px solid #7469b6;
    color: #ffffff;
  }
`;

export default LoginButton;
