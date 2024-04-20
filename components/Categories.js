import styled from "styled-components";
import { useEffect } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { useState } from "react";
import Link from "next/link";

const StyledCategories = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 385px;
  height: 496px;
  left: 101px;
  top: 78px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  overflow-x: hidden;
  z-index: 10;
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
  color: ${(props) => (props.selectedcategory ? "#7469B6" : "black")};
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
  &:hover {
    font-weight: 900;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default function Categories({ categories, subcategories }) {
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
  

  return (
    <StyledCategories id="categoriesContainer">
      <CategoriesDiv>
        {Object.keys(categoriesWithSubcategories).map((category, index) => (
          <div key={index}>
            <ColumnText
              selectedcategory={
                selectedcategory === category ? "true" : "false"
              }
              onClick={() => handleClick(category)}
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
                <StyledLink key={index} href={`/category/${subcategory}`}>
                  <SubCategoryText>{subcategory}</SubCategoryText>
                </StyledLink>
              )
            )}
        </SubCategoriesDiv>
      )}
    </StyledCategories>
  );
}
