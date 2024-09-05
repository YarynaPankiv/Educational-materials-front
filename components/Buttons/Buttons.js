import { useState } from "react";
import styled from "styled-components";
import Center from "../Center";


export default function Buttons({ onRecentlyAddedClick, onAllClick }) {
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedAll, setIsClickedAll] = useState(true);

  const handleClick = () => {
    setIsClicked(true);
    setIsClickedAll(false);
    onRecentlyAddedClick();
  };

  const handleClickAll = () => {
    setIsClickedAll(true);
    setIsClicked(false);
    onAllClick();
  };

  return (
      <Div>
        <StyledButton clicked={isClickedAll} onClick={handleClickAll}>
          Всі матеріали
        </StyledButton>
        <StyledButton clicked={isClicked} onClick={handleClick}>
          Недавно додані
        </StyledButton>
      </Div>
  );
}

const StyledButton = styled.button`
  margin-top: 25px;
  margin-right: 30px;
  width: 181px;
  height: 40px;
  background: ${(props) => (props.clicked ? "#C9CDD2" : "#EFEFEF")};
  border-radius: 30px;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-family: "Montserrat", sans-serif;
  transition: background 0.3s ease;
  cursor: pointer;
  @media only screen and (max-width: 605px) {
    height: auto;
    width: 170px;
    height: 40px;
    /* margin-top: 20px; */
    margin-right: 0;
    text-align: center;
    margin-bottom: 0;
    margin: 0;
  }
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  @media only screen and (max-width: 605px) {
    justify-content: center;
    justify-content: space-around;
    margin: 0;

  }
`;