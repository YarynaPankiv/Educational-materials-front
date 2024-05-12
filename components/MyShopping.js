import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Center from "./Center";
import { useAuth } from "@/Contexts/AccountContext";
import Urls from "./Urls";
import { StyledImage } from "@/components/ShoppingCart";
import { IconTrash } from "@/components/ShoppingCart";
import { PurpleText } from "@/components/ShoppingCart";
const getFileExtension = (fileName) => {
  if (fileName) {
    return fileName.split(".").pop();
  }
  return;
};

const MyShopping = ({ orders, products }) => {
  const { user } = useAuth();
  const [userOrders, setUserOrders] = useState([]);
  const userId = user ? user.data._id : null;

  const handleFileDownload = async (product) => {
    if (product && product.file && product.file.length > 0) {
      const link = document.createElement("a");
      link.href = product.file[0]?.url;
      link.setAttribute("download", true);
      link.click();
      await new Promise((resolve) => setTimeout(resolve, 100));
    } else {
      console.error("File not found for the product");
    }
  };


  useEffect(() => {
    if (userId) {
      const newUserOrders = orders.filter((order) => order.userId === userId);
      setUserOrders(newUserOrders);
    }
  }, [userId, orders]);
  console.log(userOrders);


  return (
    <Center>
      <OuterContainer>
        <Page>
          <StyledH2>Покупки</StyledH2>
          <AllProducts> {/* Corrected tag name */}
            {userOrders.map((order) => (

              <React.Fragment key={order._id}> {/* Added key to Fragment */}

                {order.products.map((productId) => {
                  const product = products.find((p) => p._id === productId);
                  {console.log(product)}
                  return (
                    <OrderContainer key={productId}>
                      <IdDiv>№: {order._id}</IdDiv> {/* Is this line necessary? */}
                      <ProductImageWrapper>
                        <StyledImage src={product.images[0]} />
                        <Div>
                          <StyledP>
                            <b>{product.productName}</b>
                          </StyledP>
                          <StyledP>
                            Формат:{" "}
                            <PurpleText>
                              {product.file &&
                                product.file
                                  .map((file) => getFileExtension(file.name))
                                  .join(", ")}
                            </PurpleText>
                          </StyledP>
                          <StyledCost>{product.price} ГРН</StyledCost>
                        </Div>
                        <LoadButton onClick={() => handleFileDownload(product)} >Завантажити</LoadButton>
                      </ProductImageWrapper>
                    </OrderContainer>
                  );
                })}
              </React.Fragment>
            ))}
          </AllProducts>
        </Page>
      </OuterContainer>
    </Center>
  );
};

const IdDiv = styled.p`
  margin-bottom: 0;
  margin-top: 10px;
`
const OuterContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Div = styled.div`
  margin-left: 15px;
  width: 600px;
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin-left: 25%;

`;

const StyledH2 = styled.h2`

  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  margin-bottom: 25px;
  margin-right: 0px;
`;

const OrderContainer = styled.div`
  width: 800px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  position: relative;
`;

const ProductOrder = styled.div`
margin-top: 7px;
display: flex;
flex-direction: column;
position: relative;
margin-left: 10px;
margin-right: 15px;
width: 580px;
height: 150px;
border-radius: 15px;
border: 0.2px solid #ccc;
background-color: white;
margin-bottom: 10px;
@media only screen and (max-width: 600px) {
  width: auto;
  height: auto;
}
`;

const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
`;



const StyledP = styled.p`
  /* стилі для StyledP */
`;

const StyledCost = styled.p`
    font-family: "Montserrat";
    font-style: normal;
    font-weight: bolder;
    font-size: 16px;
    color: #327a4c;
    @media only screen and (max-width: 650px) {
      margin-left: 0;
      margin-right: auto;
    }
  `;


const AllProducts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoadButton = styled.button`
  background-color: #7469b6;
  font-family: "Montserrat";
  font-size: 16px;
  border: none;
  color: #fffcfc;
  height: 40px;
  width: 180px;
  background: #ad88c6;
  border-radius: 10px;

  border: none;
  cursor: pointer;
  :hover {
    background: #7469b6;
  }
  
`

export default MyShopping;
