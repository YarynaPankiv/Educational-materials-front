import { CartContext } from "@/Contexts/CartContext";
import BuyButton from "@/components/Buttons/BuyButton";
import { useContext } from "react";
import styled from "styled-components";
import { ProductImageWrapper } from "@/components/ShoppingCart";
import { StyledImage } from "@/components/ShoppingCart";
import { IconTrash } from "@/components/ShoppingCart";
import { PurpleText } from "@/components/ShoppingCart";
import PayButton from "@/components/Buttons/PayButton";
import { getFileExtension } from "./product/[id]";


// Створюємо стилі для контейнера замовлення
const OrderContainer = styled.div`
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
  border: 0.5 solid #ccc;
`;

// Створюємо стилі для кнопки оформлення замовлення
const CheckoutButton = styled.button`
  background-color: #7469b6;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`;
const StyledCost = styled.p`
  text-align: right;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  margin-right: 25px;
  color: #327a4c;
`;
const TotalCost = styled.div`
  text-align: left;

  margin-top: 16px;
  margin-bottom: 15px;
  margin-right: 18px;
  margin-left:10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
`;
const GreenPrice = styled.span`
  color: #327a4c;
  
  margin-right: 8px;
`;
const ProductOrder = styled.div`

  display: flex;
  flex-direction: column;
  //  align-items: flex-start;
  position: relative;
  width: 570px;
  height: 150px;

  border: 0.2px solid #ccc;
  background-color: white;
  z-index: 33;
`;
export default function Checkout() {
  const { cartProducts, setCartProducts, deleteProductFromCart } =
    useContext(CartContext);

  // Функція для розрахунку загальної суми замовлення
  const calculateTotal = () => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price;
    });
    return total;
  };
  const totalCost = calculateTotal();
  // Функція для оформлення замовлення
  const handleCheckout = () => {
    // Реалізуйте логіку для оформлення замовлення тут
    console.log("Order placed!");
  };

  return (
    <OrderContainer>
      <h2>Оформлення замовлення</h2>
      {cartProducts && cartProducts.map((pr) => (
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
              <ul>
                <p key={pr._id}>
                  <b>{pr.productName}</b>
                </p>
                {/* {subcategories &&
                  subcategories.map((subcat) => {
                    if (subcat._id === pr.subcategory) {
                      return (
                        <p key={subcat._id}>
                          Категорія:
                          <PurpleText>{subcat.subCategoryName}</PurpleText>{" "}
                        </p>
                      );
                    }
                    return null;
                  })} */}
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
              </ul>
            </ProductImageWrapper>
          </ProductOrder>
        ))}
        {totalCost > 0 && (
          <TotalCost>
            Загальна вартість: <GreenPrice>{totalCost} ГРН</GreenPrice>
          </TotalCost>
        )}
       <PayButton></PayButton>
    </OrderContainer>
    
  );
}
