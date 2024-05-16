import { useState } from "react";
import styled from "styled-components";
import Categories from "@/components/Categories";
import { useCategories } from "@/Contexts/CategoriesContext";

export default function CategoriesButton({
  categories,
  subcategories,
  darkTheme,
}) {
  const { showCategories, setShowCategories } = useCategories();

  return (
    <>
      <StyledButton $showCategories={showCategories} darkTheme={darkTheme}>
        {!showCategories && (
          <StyledSVG
            darkTheme={darkTheme}
            width="24"
            height="16"
            viewBox="0 0 24 16"
            fill="#7469B6"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.19086 15.1818H22.2686C22.9588 15.1818 23.5234 14.6487 23.5234 13.997C23.5234 13.3453 22.9588 12.8121 22.2686 12.8121H2.19086C1.50068 12.8121 0.935997 13.3453 0.935997 13.997C0.935997 14.6487 1.50068 15.1818 2.19086 15.1818ZM2.19086 9.25759H22.2686C22.9588 9.25759 23.5234 8.72441 23.5234 8.07274C23.5234 7.42108 22.9588 6.8879 22.2686 6.8879H2.19086C1.50068 6.8879 0.935997 7.42108 0.935997 8.07274C0.935997 8.72441 1.50068 9.25759 2.19086 9.25759ZM0.935997 2.1485C0.935997 2.80017 1.50068 3.33335 2.19086 3.33335H22.2686C22.9588 3.33335 23.5234 2.80017 23.5234 2.1485C23.5234 1.49684 22.9588 0.963654 22.2686 0.963654H2.19086C1.50068 0.963654 0.935997 1.49684 0.935997 2.1485Z" />
          </StyledSVG>
        )}
        {console.log(showCategories)}
        {showCategories && (
          <StyledCloseSvg
            darkTheme={darkTheme}
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="#FFFFFF"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6424 1.39738L10.495 0.25L5.9462 4.79882L1.39738 0.25L0.25 1.39738L4.79882 5.9462L0.25 10.495L1.39738 11.6424L5.9462 7.09358L10.495 11.6424L11.6424 10.495L7.09358 5.9462L11.6424 1.39738Z"
              fill="white"
            />
          </StyledCloseSvg>
        )}
        Категорії
      </StyledButton>
    </>
  );
}

const media = {
  mobile: `@media only screen and (max-width: 600px)`,
};

const StyledButton = styled.button`
  width: 146px;
  height: 34px;
  padding: 0;

  background-color: ${(props) => (props.darkTheme ? "#1D2733" : "white")};
  border-radius: 10px;
  border: ${(props) => (props.$showCategories ? "none" : "2px solid #7469b6")};
  border: ${(props) => (props.darkTheme ? "none" : "2px solid #7469b6")};
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.$showCategories || props.darkTheme ? "#FFFFFF" : "#7469b6"};
  font-weight: 500;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;

  ${media.mobile} {
    width: 127px;
    margin-left: 5px;
  }

  &:hover {
    background-color: ${(props) =>
      props.$showCategories || props.darkTheme ? "#7469B6" : "#FFFFFF"};
    color: ${(props) =>
      props.$showCategories || props.darkTheme ? "#FFFFFF" : "#7469B6"};
  }
`;

const StyledSVG = styled.svg`
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 0px;
  fill: ${(props) => (props.darkTheme ? "#FFFFFF" : "#7469B6")};

  @media only screen and (max-width: 600px) {
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const StyledCloseSvg = styled.svg`
  margin-left: 20px;
  margin-right: 16px;
  margin-bottom: 0px;
  fill: ${(props) => (props.darkTheme ? "#FFFFFF" : "#7469B6")};
`;
