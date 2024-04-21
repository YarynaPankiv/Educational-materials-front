import styled from "styled-components";
import CartDropDownWrap from "@/components/DropDowns/CartDropDown";
import Cart from "./headerComponents.js/cart";

const CartBox = styled.div`
  /* Rectangle 12 */

  box-sizing: border-box;
  /* Group 26 */
  position: absolute;
  width: 455px;

 
`;
const ProductBox = styled.div`
  box-sizing: border-box;
  /* Group 26 */
  position: absolute;
  width: 455px;
`
export default function ShoppingCart({icon, product}) {
  console.log("soso");
  
  const cart = [];
  if(product){
   cart.push(product);
  }
  console.log(cart);
  return (
    <CartDropDownWrap icon={icon}>
      <ProductBox>
        {cart.map((pr) => (
          <p key={pr.productId}> {pr.productName}</p>
        ))}
      </ProductBox>
    </CartDropDownWrap>
  );
}