import styled from "styled-components";

const LoginButton = ({ onClick, children }) => {
  const handleOnClick = () => {
    onClick();
  };

  return <Button onClick={handleOnClick}>{children}</Button>;
};

const Button = styled.button`
  border: 2px solid #ad88c6;
  background-color: #ffffff;
  padding: 12px 12px;
  font-family: Rubik Mono One;
  font-size: 16px;
  color: #ad88c6;
  cursor: pointer;
  width: 100%;
  max-width: 400px;

  &:hover {
    background: #7469b6;
    border: 2px solid #7469b6;
    color: #ffffff;
  }
  @media only screen and (max-width: 605px) {
    font-size: 14px;
    padding: 10px 10px;
  }
`;

export default LoginButton;
