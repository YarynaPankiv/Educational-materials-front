import styled from "styled-components";
import Center from "../Center";

export default function ButtonsForPages({
  totalPages,
  onPageChange,
  currentPage,
  darkTheme
}) {
  const handleButtonClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderNumberedButtons = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <StyledButton
          key={i}
          onClick={() => handleButtonClick(i)}
          clicked={i === currentPage ? "true" : "false"}
        >
          {i}
        </StyledButton>
      );
    }
    return buttons;
  };

  return totalPages > 1 ? (
    <Center>
      <StyledLineOfButtons>{renderNumberedButtons()}</StyledLineOfButtons>
    </Center>
  ) : null;
}

const StyledButton = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) => (props.clicked === "true" ? (props.darkTheme ? "#732270" : "#AD88C6") : "#FCFAFA")};
  border: 1px solid #000000;
  color: ${(props) => (props.clicked === "true" ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  @media only screen and (max-width: 605px) {
    width: 25px;
    height: 25px;
    border-radius: 5px;
    font-size: 14px;
  }
`;

const StyledLineOfButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
  margin-bottom: 25px;
  @media only screen and (max-width: 605px) {
    margin-top: 0;
  }
`;
