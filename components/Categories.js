
import styled from "styled-components";
import { useEffect } from "react";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import { useState } from "react";


const StyledCategories = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 385px;
  height: 496px;
  left: 101px;
  top: 78px;
  background: #FFFFFF;
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

  /* Add a vertical line between columns */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: #A2A7AF;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ColumnText = styled.p`
  text-align: center;
  user-select: none;
  cursor: pointer;
  color: ${(props) => (props.selectedCategory ? "#7469B6" : "black")};
  font-weight: ${(props) => (props.selectedCategory ? "bold" : "normal")};
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
`;




export default function Categories({ categories, subcategories }) {
  const categoriesWithSubcategories = categories.reduce((acc, category) => {
    const subcategoriesForCategory = subcategories
      .filter(subcategory => String(subcategory.parentCategory) === String(category._id))
      .map(subcategory => subcategory.subCategoryName);
    acc[category.categoryName] = subcategoriesForCategory;
    return acc;
  }, {});

  const [selectedCategory, setSelectedCategory] = useState(Object.keys(categoriesWithSubcategories)[0]);

  const handleClick = (category) => {
      setSelectedCategory(category);
  };

  return (
      <StyledCategories>
          <CategoriesDiv>
              {Object.entries(categoriesWithSubcategories).map(([category, subcategories]) => (
                  <div key={category}>
                  <ColumnText
                     selectedCategory={selectedCategory === category}
                     onClick={() => handleClick(category)}>
                      {category}
                     </ColumnText>

                  </div>
              ))}
          </CategoriesDiv>
          {selectedCategory && (
                  <SubCategoriesDiv>
                      {categoriesWithSubcategories[selectedCategory].map((subcategory, index) => (
                          <SubCategoryText key={index}>{subcategory}</SubCategoryText>
                      ))}
                  </SubCategoriesDiv>
          )}
      </StyledCategories>
  );
}
