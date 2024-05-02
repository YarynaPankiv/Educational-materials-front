import styled from "styled-components";
import Center from "./Center";
import { useAuth } from "@/Contexts/AccountContext";
import { useEffect } from "react";
import { useState } from "react";
import Checkout from "@/pages/Checkout";
import { TotalCost } from "@/pages/Checkout";
import { GreenPrice } from "@/pages/Checkout";

const MyShopping = ({ orders, products }) => {
  console.log(orders);
  console.log(products);
  const { user } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const userId = user ? user.data._id : null;

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 600;
    const userOrders = orders.filter((order) => order.userId === userId);
    setUserOrders(userOrders);
  }, []);

  return (
    <Center>
      <Page>
        <StyledH2>Покупки</StyledH2>
        {userOrders.map((order) => (
          <OrderContainer key={order._id}>
            <p>№: {order._id}</p>
            
            <ul>
              {order.products.map((productId) => {
                const product = products.find((p) => p._id === productId);
                console.log(product);
                return (
                  <li key={productId}>
                    {product ? (
                      <>
                        <span>{product.productName}</span>
                        <StyledDate>{order.createdAt}</StyledDate>
                      </>
                    ) : (
                      <span>Product not found</span>
                    )}
                  </li>
                );
              })}
            </ul>
            
            <TotalCost>
              Загальна вартість: <GreenPrice>{order.totalPrice} ГРН</GreenPrice>
            </TotalCost>
          
          </OrderContainer>
        ))}
      </Page>
    </Center>
  );
};
const StyledH2 = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 25px;
  margin-right: 0px;
`
const StyledDate = styled.span`
  font-size:16px;
  position: absolute;
  top: 5px;
  right: 5px;
  margin-right:5px;
  margin-top:5px;
  color:black;
`;
const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: 20%;

  
  @media only screen and (max-width: 600px) {
    width: 364px;
    margin-left: 8px;
    margin-right: 5px;
  }
`;

const OrderContainer = styled.div`
  width: 726px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin-top:0px;
  position: relative;
`;

export default MyShopping;
