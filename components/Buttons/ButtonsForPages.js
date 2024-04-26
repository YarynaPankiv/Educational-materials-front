import styled from "styled-components";
import Center from "../Center";

const StyledButton = styled.div`
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 10px;
  background: ${(props) => (props.clicked === "true" ? "#AD88C6" : "#FCFAFA")};
  border: 1px solid #000000;
  color: ${(props) => (props.clicked === "true" ? "white" : "black")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
`;

const StyledLineOfButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 37px;
  margin-bottom: 25px;
`;

export default function ButtonsForPages({
  totalPages,
  onPageChange,
  currentPage,
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

