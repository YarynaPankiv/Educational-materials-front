import styled from "styled-components";
import Center from "../Center";
import Link from "next/link";
import { CartContext } from "@/Contexts/CartContext";
import { useContext } from "react";
import { useState } from "react";
import { useCart } from "@/Contexts/ShowCart";

export default function ProductBox({ product }) {
  const [addedToCart, setAddedToCart] = useState(false);

  const url = "/product/" + product._id;
  const { cartProducts, setCartProducts, deleteProductFromCart, addToCart } =
    useContext(CartContext);

  const { showCart, handleShowCartClick, showCartClick } = useCart();
  const handleClick = () => {
    addToCart(product);
    showCartClick();
  };

  return (
    <Center>
      <StyledProduct href={url}>
        <ImgWrraper>
          <Link href={url}>
            <StyledPNG src={product.images[0]} alt="Product Image" />
          </Link>
        </ImgWrraper>

        <StyledLink href={url}>
          <StyledName>{product.productName}</StyledName>
        </StyledLink>
        <StyledCost>{product.price} UAH</StyledCost>
        <StyledAddToCart onClick={() => handleClick()}>
          <svg
            width="25"
            height="20"
            viewBox="0 0 25 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.80643 15.0559H21.4474C21.8693 15.0559 22.2377 14.7304 22.2377 14.2929C22.2377 13.8554 21.8693 13.5299 21.4474 13.5299H8.99037C8.37293 13.5299 7.99396 13.1228 7.89644 12.5026L7.72313 11.4344H21.4686C23.0502 11.4344 23.8626 10.5186 24.09 9.06421L24.9566 3.68272C24.9796 3.55492 24.9941 3.42591 25 3.29643C25 2.80815 24.6099 2.47222 24.0142 2.47222H6.32603L6.1199 1.18055C6.01176 0.397134 5.70858 0 4.60402 0H0.801383C0.36834 0 0 0.35677 0 0.763887C0 1.18055 0.36834 1.53689 0.801845 1.53689H4.4626L6.1957 12.7061C6.42354 14.1506 7.23555 15.0559 8.80643 15.0559ZM23.1583 4.00823L22.3902 8.88105C22.3033 9.51169 21.9461 9.89841 21.3069 9.89841L7.48558 9.90839L6.5645 4.00823H23.1583ZM9.66235 19.9999C9.89333 20.0017 10.1224 19.9603 10.3361 19.8781C10.5499 19.796 10.7441 19.6746 10.9074 19.5213C11.0708 19.3679 11.2 19.1855 11.2875 18.9847C11.375 18.784 11.4191 18.5689 11.4172 18.3519C11.4181 18.1353 11.3734 17.9206 11.2856 17.7202C11.1977 17.5198 11.0685 17.3378 10.9054 17.1846C10.7422 17.0314 10.5484 16.91 10.335 16.8275C10.1217 16.745 9.89307 16.703 9.66235 16.7039C8.67703 16.7039 7.8969 17.4366 7.8969 18.3519C7.8969 19.2777 8.67703 19.9999 9.66235 19.9999ZM19.7901 19.9999C20.7759 19.9999 21.5555 19.2777 21.5555 18.3519C21.5555 17.4361 20.7759 16.7039 19.7901 16.7039C18.8154 16.7039 18.0246 17.4366 18.0246 18.3519C18.0246 19.2777 18.8154 19.9999 19.7901 19.9999Z"
              fill="#FFFCFC"
            />
          </svg>
        </StyledAddToCart>
      </StyledProduct>
    </Center>
  );
}
const StyledProduct = styled.div`
  width: 218px;
  height: 287px;
  background: #f3f3f3;
  border-radius: 10px;
  position: relative;
  margin-top: 25px;
  @media only screen and (max-width: 600px) {
    width: 170px;
    height: 220px;
  }
`;
const ImgWrraper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPNG = styled.img`
  margin-top: 0;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;
const StyledName = styled.p`
  padding: 8px 12px;
  text-align: center;
  color: #333;
  margin-top: 20px;
  word-break: break-word;
  margin-left: 5px;
  max-height: 3em; 
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    margin-top: 5px;
    font-size: 15px;
  }
`;

const StyledCost = styled.p`
  font-weight: 900;
  color: #55926c;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 20px;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin-left: 35px;
  }
`;

const StyledAddToCart = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #7469b6;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background: #ad88c6;
  }
  @media only screen and (max-width: 600px) {
    margin-right: 10px;
    height: 35px;
    width: 35px;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;
