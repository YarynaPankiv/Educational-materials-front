import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "@/Contexts/CartContext";
import { useEffect, useState, useRef } from "react";
import BuyButton from "./Buttons/BuyButton";
import CartDropDownWrap from "./DropDowns/CartDropDown";
import { useCart } from "@/Contexts/ShowCart";
import PayButton from "./Buttons/PayButton";

const ProductBox = styled.div`
  position: relative;
  width: 465px;
  height: auto;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 60px;
  right: -195px;
  border: 1px solid #a2a7af;
  z-index: 30;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: white;

`;

const ProductOrder = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 170px;
  border: 0.5px solid #a2a7af;
  background-color: white;
  padding: 5px;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 140px;
  height: auto;
  margin-left: 10px;
  margin-right: 10px;
`;

const ProductInfo = styled.div`
  width: 300px;
`;

export const PurpleText = styled.span`
  color: #7469b6;
  font-weight: bold;
  margin-left: 10px;
`;

const StyledCost = styled.p`
  text-align: right;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
  font-size: 16px;
  margin-right: 25px;
  color: #327a4c;
`;

export const IconTrash = styled.div`
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: absolute;
  margin-right: 10px;
  margin-top: 10px;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const TotalCost = styled.div`
  text-align: right;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  margin-top: auto; 
  margin-right: 25px;
  background-color: white;


`;

const GreenPrice = styled.span`
  color: #327a4c;
  margin-left: 12px;
  margin-right: 8px;
  font-size: 18px;
`;

const StyledEmptyCart = styled.p`
  font-family: "Rubik Mono One", sans-serif;
  font-size: 20px;
  margin-left: 70px;
  margin-top: 100px;
`;

const ContinueBuying = styled.p`
  margin-left: 170px;
  color: gray;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #ad88c6;
  }
`;

const StyledName = styled.b`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TotalCostP = styled.p`
 margin-top: 20px;

`

const getFileExtension = (fileName) => {
  if (fileName) {
    return fileName.split(".").pop();
  }
  return;
};

export default function ShowShoppingCart({ subcategories }) {
  const { cartProducts, setCartProducts, deleteProductFromCart } = useContext(
    CartContext
  );
  const { showCart, handleShowCartClick } = useCart();
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleShowCartClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleShowCartClick]);

  const totalCost = cartProducts.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <Wrapper>
      <ProductBox ref={ref} >
        {cartProducts.length > 0 &&
          cartProducts.map((pr) => (
            <ProductOrder key={pr._id}>
              <IconTrash onClick={() => deleteProductFromCart(pr._id)}>
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.72396 16.4271C2.25868 16.4271 1.86181 16.2632 1.53333 15.9354C1.20556 15.6076 1.04167 15.2108 1.04167 14.7448V1.84375H0V0.802083H4.16667V0H10.4167V0.802083H14.5833V1.84375H13.5417V14.7448C13.5417 15.224 13.3812 15.624 13.0604 15.9448C12.7396 16.2656 12.3392 16.4264 11.8594 16.4271H2.72396ZM12.5 1.84375H2.08333V14.7448C2.08333 14.9316 2.1434 15.0851 2.26354 15.2052C2.38368 15.3253 2.53715 15.3854 2.72396 15.3854H11.8594C12.0191 15.3854 12.166 15.3187 12.3 15.1854C12.434 15.0521 12.5007 14.9052 12.5 14.7448V1.84375ZM5.00833 13.3021H6.05V3.92708H5.00833V13.3021ZM8.53333 13.3021H9.575V3.92708H8.53333V13.3021Z"
                    fill="#DF0F0F"
                  />
                </svg>
              </IconTrash>

              <ProductImageWrapper>
                <StyledImage src={pr.images[0]} />
                <ProductInfo>
                  <p key={pr._id}>
                    <StyledName>{pr.productName}</StyledName>
                  </p>
                  {subcategories &&
                    subcategories.map((subcat) => {
                      if (subcat._id === pr.subcategory) {
                        return (
                          <p key={subcat._id}>
                            Категорія:
                            <PurpleText>
                              {subcat.subCategoryName}
                            </PurpleText>{" "}
                          </p>
                        );
                      }
                      return null;
                    })}
                  <p key={pr._id}>
                    Формат:{" "}
                    <PurpleText>
                      {pr.file && pr.file[0] && pr.file[0].name
                        ? getFileExtension(pr.file[0].name)
                        : ""}
                    </PurpleText>
                  </p>
                  <p key={pr._id}>
                    <StyledCost>{pr.price} ГРН</StyledCost>
                  </p>
                </ProductInfo>
              </ProductImageWrapper>
            </ProductOrder>
          ))}
        {cartProducts.length === 0 && (
          <>
            <StyledEmptyCart>Ваша корзина пуста</StyledEmptyCart>
            <ContinueBuying onClick={handleShowCartClick}>
              Продовжити
            </ContinueBuying>
          </>
        )}
      </ProductBox>
      <TotalCost>
        {cartProducts.length > 0 && totalCost > 0 && (
          <>
          <TotalCostP>
          Загальна вартість: <GreenPrice>{totalCost} ГРН</GreenPrice>

          </TotalCostP>
            
            <PayButton />
          </>
        )}
      </TotalCost>
    </Wrapper>
  );
}
