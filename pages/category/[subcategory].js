import React, { useState } from 'react';
import Center from "@/components/Center";
import Header from "@/components/Header";
import LogoWithoutPurple from "@/components/LogoWithoutPurple";
import styled from "styled-components"

import { mongooseConnect } from '@/lib/mongoose';
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory.js";
import ProductsGrid from '@/components/ProductsGrid';
import Link from 'next/link';
import Sort from '@/components/Sort';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    opacity: 60%;
    margin-right: 10px;

`

const StyledSvg = styled.svg`
  margin-left: 10px;
  fill: ${props => (props.showSort ? "#7469B6" : "black")};

`

const Urls = styled.div`
     display: flex;
     align-items: center;


`
const StyledP = styled.span`
    color: black;
    opacity: 60%;
    margin-left: 10px;

`
const Div = styled.div`
     display: flex;
     align-items: center;
     margin-right: 40px;
     

  
`
const Container = styled.div`
    display: flex;
     align-items: center; 
     
`
const SortP = styled.p`
    cursor: pointer;
    user-select: none;
    color: ${props => (props.showSort ? "#7469B6" : "black")};
    font-weight: ${props => (props.showSort ? "900" : "0")};


`
const ClassButton = styled.button`
   font-family: 'Montserrat', sans-serif;
   background: white;
   border: 1px solid black;
   font-size: 16px;
   padding: 5px 10px;
   height: 30px; /* Задайте висоту, яка вам підходить */
   width: auto; /* Щоб кнопка займала лише необхідний обсяг простору */
   margin-right: 5px; /* Додайте бажані зовнішні відступи між кнопками */
   cursor: pointer;
   &:hover{
    background: #7469B6;
    color: white;
      
   }
   



`
const ClassesDiv = styled.div`
    margin-top: 10px;
    height: 110px;
    display: flex;
    flex-wrap: wrap;
    
`

export async function getServerSideProps(context) {
    await mongooseConnect();
    const {subcategory} = context.query;
    const allProducts = await Product.find({}, null );
    const categories = await Category.find({});
    const subcategories = await SubCategory.find({});

    return {
        props: {
            subcategory: JSON.parse(JSON.stringify(subcategory)),
            categories: JSON.parse(JSON.stringify(categories)),
            subcategories: JSON.parse(JSON.stringify(subcategories)),
            allProducts: JSON.parse(JSON.stringify(allProducts)),
        }
    };
}

export default function ProductsInSubcategory({ categories, subcategories, subcategory, allProducts }) {
   const products = [];
   let id;
   let choosenSubC;
   subcategories.forEach(Subcategory =>{
    if(Subcategory.subCategoryName === subcategory){
        id = Subcategory._id;
        choosenSubC = Subcategory;

    }

   });

   if (allProducts) {
    allProducts.forEach(product => {
        if (product.subcategory && product.subcategory === id) {
            console.log(product.subcategory.subCategoryName);
            const subcategoryName = product.subcategory.subCategoryName;
            products.push({ ...product, subcategoryName }); 
        }
    });
    }

    const [showSort, setShowSort] = useState(false);
    const handleOnSortClick = () =>{
        setShowSort(!showSort);
    }

    let chosenSchoolMaterials;
    categories.forEach(category => {
        if(category.categoryName === "Шкільні"){
            if(choosenSubC.parentCategory == category._id){
                chosenSchoolMaterials = true;
            }
        }
    })

    const allClases = [];
    products.forEach(product => {
        if(product.schoolClass){
            allClases.push(product.schoolClass);

        }

    })


    return (
        <>
         
            <Header categories={categories} subcategories={subcategories} />
            <Center>
                <LogoWithoutPurple />
                <Urls>
                <StyledLink href="/">Головна</StyledLink>
                <StyledSvg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.46875 0L0 1.46875L4.77083 6.25L0 11.0312L1.46875 12.5L7.71875 6.25L1.46875 0Z" fill="black" fill-opacity="0.61"/>
                </StyledSvg>
                <StyledP>{subcategory}</StyledP>
                </Urls>
                {chosenSchoolMaterials && (
                    <ClassesDiv>
                    <ClassButton>Переглянути всі</ClassButton>
                    {allClases.map((schoolClass, index) => (
                    <ClassButton key={index}>{schoolClass}</ClassButton>
                ))}

                    </ClassesDiv>

                 )}



                <Container>
                <Div>
                    <SortP onClick={handleOnSortClick} showSort={showSort}>Сортувати за</SortP>
                    {!showSort &&                     <StyledSvg showSort={showSort} width="16" height="8" viewBox="0 0 16 8" fillColor={showSort ? "#7469B6" : "black"} xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3363 0.446248L8.48006 6.21C8.35229 6.33641 8.1798 6.40731 8.00006 6.40731C7.82032 6.40731 7.64784 6.33641 7.52006 6.21L1.66256 0.447498C1.53368 0.321747 1.36075 0.251357 1.18069 0.251357C1.00062 0.251357 0.827692 0.321747 0.698813 0.447498C0.635503 0.50922 0.585188 0.582989 0.550833 0.66446C0.516478 0.745931 0.498779 0.833455 0.498779 0.921873C0.498779 1.01029 0.516478 1.09781 0.550833 1.17929C0.585188 1.26076 0.635503 1.33453 0.698813 1.39625L6.55381 7.15875C6.93947 7.53741 7.45834 7.74955 7.99881 7.74955C8.53929 7.74955 9.05816 7.53741 9.44381 7.15875L15.2988 1.39625C15.3623 1.33451 15.4128 1.26066 15.4473 1.17907C15.4817 1.09749 15.4995 1.00982 15.4995 0.921249C15.4995 0.83268 15.4817 0.745009 15.4473 0.663423C15.4128 0.581836 15.3623 0.507989 15.2988 0.446248C15.1699 0.320497 14.997 0.250107 14.8169 0.250107C14.6369 0.250107 14.4639 0.320497 14.3351 0.446248" fill="black"/>
                    </StyledSvg>}
                    {
                        showSort && <StyledSvg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.66393 7.55375L7.52018 1.79C7.64796 1.66359 7.82044 1.59269 8.00018 1.59269C8.17992 1.59269 8.3524 1.66359 8.48018 1.79L14.3377 7.5525C14.4666 7.67825 14.6395 7.74864 14.8196 7.74864C14.9996 7.74864 15.1726 7.67825 15.3014 7.5525C15.3647 7.49078 15.4151 7.41701 15.4494 7.33554C15.4838 7.25407 15.5015 7.16654 15.5015 7.07813C15.5015 6.98971 15.4838 6.90219 15.4494 6.82071C15.4151 6.73924 15.3647 6.66547 15.3014 6.60375L9.44643 0.841251C9.06078 0.462594 8.5419 0.250445 8.00143 0.250445C7.46096 0.250445 6.94208 0.462594 6.55643 0.841251L0.70143 6.60375C0.637928 6.66549 0.587449 6.73934 0.552981 6.82093C0.518513 6.90251 0.500752 6.99018 0.500752 7.07875C0.500752 7.16732 0.518513 7.25499 0.552981 7.33658C0.587449 7.41816 0.637928 7.49201 0.70143 7.55375C0.830309 7.6795 1.00324 7.74989 1.1833 7.74989C1.36337 7.74989 1.5363 7.6795 1.66518 7.55375" fill="#7469B6"/>
                        </StyledSvg>
                        
                    }

                </Div>
                <Div>
                    <SortP>Ціна</SortP>
                    <StyledSvg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3363 0.446248L8.48006 6.21C8.35229 6.33641 8.1798 6.40731 8.00006 6.40731C7.82032 6.40731 7.64784 6.33641 7.52006 6.21L1.66256 0.447498C1.53368 0.321747 1.36075 0.251357 1.18069 0.251357C1.00062 0.251357 0.827692 0.321747 0.698813 0.447498C0.635503 0.50922 0.585188 0.582989 0.550833 0.66446C0.516478 0.745931 0.498779 0.833455 0.498779 0.921873C0.498779 1.01029 0.516478 1.09781 0.550833 1.17929C0.585188 1.26076 0.635503 1.33453 0.698813 1.39625L6.55381 7.15875C6.93947 7.53741 7.45834 7.74955 7.99881 7.74955C8.53929 7.74955 9.05816 7.53741 9.44381 7.15875L15.2988 1.39625C15.3623 1.33451 15.4128 1.26066 15.4473 1.17907C15.4817 1.09749 15.4995 1.00982 15.4995 0.921249C15.4995 0.83268 15.4817 0.745009 15.4473 0.663423C15.4128 0.581836 15.3623 0.507989 15.2988 0.446248C15.1699 0.320497 14.997 0.250107 14.8169 0.250107C14.6369 0.250107 14.4639 0.320497 14.3351 0.446248" fill="black"/>
                    </StyledSvg>

                </Div>

                </Container>

                {showSort && <Sort/>}
                
                
                <ProductsGrid products={products}/>

            </Center>
        </>
    );
}

