import styled from "styled-components";
import CartDropDownWrap from "@/components/CartDropDown";
import Cart from "./headerComponents.js/cart";
import { useContext } from "react";
import { CartContext } from "@/Contexts/CartContext";
import { useEffect } from "react";
const ProductBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 455px;
`
export default function ShoppingCart({ icon, product }) {
  console.log("soso");
  const { cartProducts, setCartProducts } = useContext(CartContext);

  useEffect(() => {
    if (product) {
        // Перевіряємо, чи вже є продукт у корзині
        const productExists = cartProducts.some(pr => pr._id === product._id);
        // Якщо продукту ще немає у корзині, додаємо його
        if (!productExists) {
            setCartProducts(prev => [...prev, product]);
        }
    }
}, [product, cartProducts, setCartProducts]);
  return (
      <CartDropDownWrap icon={icon}>
          <ProductBox>
              {cartProducts.map((pr) => (
                  <p key={pr._id}> {pr.productName}</p>
              ))}
          </ProductBox>
      </CartDropDownWrap>
  );
}
