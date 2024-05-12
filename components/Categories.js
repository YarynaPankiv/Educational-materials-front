import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import { useCategories } from "@/Contexts/CategoriesContext";

export default function Categories({ categories, subcategories, darkTheme }) {
  const { showCategories, setShowCategories } = useCategories();

  const categoriesWithSubcategories = categories.reduce((acc, category) => {
    const subcategoriesForCategory = subcategories
      .filter(
        (subcategory) =>
          String(subcategory.parentCategory) === String(category._id)
      )
      .map((subcategory) => subcategory.subCategoryName);
    acc[category.categoryName] = subcategoriesForCategory;
    return acc;
  }, {});

  const [selectedcategory, setSelectedCategory] = useState(
    Object.keys(categoriesWithSubcategories)[0]
  );

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSubCategoryClick = () => {
    setShowCategories(false);
  };

  return (
    <StyledCategories id="categoriesContainer" darkTheme={darkTheme}>
      <CategoriesDiv>
        {Object.keys(categoriesWithSubcategories).map((category, index) => (
          <div key={index}>
            <ColumnText
              selectedcategory={selectedcategory === category ? true : false}
              onClick={() => handleClick(category)}
              darkTheme={darkTheme}
            >
              {category}
            </ColumnText>
          </div>
        ))}
      </CategoriesDiv>
      {selectedcategory && (
        <SubCategoriesDiv>
          {categoriesWithSubcategories[selectedcategory] &&
            categoriesWithSubcategories[selectedcategory].map(
              (subcategory, index) => (
                <StyledLink
                  key={index}
                  href={`/category/${subcategory}`}
                  onClick={handleSubCategoryClick}
                >
                  <SubCategoryText darkTheme={darkTheme}>{subcategory}</SubCategoryText>
                </StyledLink>
              )
            )}
        </SubCategoriesDiv>
      )}
    </StyledCategories>
  );
}
const StyledCategories = styled.div`
  box-sizing: border-box;
  width: 385px;
  height: auto;
  background:   ${(props) => (props.darkTheme ? "#1D2733" : "#ffffff")};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  overflow-x: hidden;
  z-index: 12;
  @media only screen and (max-width: 605px) {
    width: 385px;
    height: auto;
  }
`;

const CategoriesDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  position: relative;
  border: 1px solid black;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #a2a7af;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ColumnText = styled.p`
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${(props) => (props.selectedcategory ? "#7469B6" : props.darkTheme ? "white" : "black")};
  font-weight: ${(props) => (props.selectedcategory ? "bold" : "normal")};
`;

const SubCategoriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
`;

const SubCategoryText = styled.p`
  text-align: center;
  margin: 5px 0;
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  &:hover {
    font-weight: 900;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
