import styled from "styled-components";
import CartDropDownWrap from "@/components/CartDropDown";
import { useContext } from "react";
import { CartContext } from "@/Contexts/CartContext";
import { useEffect, useState } from "react";

const ProductBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 455px;
`;export default function ShoppingCart({ icon, product }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (product && !addedToCart) {
      const productExists = cartProducts.some((pr) => pr._id === product._id);
      if (!productExists) {
        setCartProducts((prev) => [...prev, product]);
        console.log(product);
        setAddedToCart(true);
      }
    }
  }, [product, addedToCart, cartProducts, setCartProducts]);

  return (
    <CartDropDownWrap icon={icon}>
      <ProductBox>
        {cartProducts.map((pr) => (
          <p key={pr._id}>{pr.productName}</p>
        ))}
      </ProductBox>
    </CartDropDownWrap>
  );
}