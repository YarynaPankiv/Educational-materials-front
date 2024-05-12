import { useState } from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import LogoWithoutPurple from "@/components/Logo/LogoWithoutPurple";
import ProductImages from "@/components/Product/ProductImages";
import styled from "styled-components";
import AddFeedback from "@/components/Feedbacks/AddFeedback";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import ShowFeedbacks from "@/components/Feedbacks/ShowFeedbacks";
import { Feedback } from "@/models/Feedback";
import { Rating } from "@mui/material";
import BuyButton from "@/components/Buttons/BuyButton";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "@/Contexts/CartContext";
import { useCart } from "@/Contexts/ShowCart";
import Urls from "@/components/Urls";
import { useAuth } from "@/Contexts/AccountContext";
import { User } from "@/models/User";
  
import MyOrder from "@/models/MyOrder";

export const getFileExtension = (fileName) => {
  if (fileName) {
    return fileName.split(".").pop();
  }
  return;
};

export async function getServerSideProps(context) {
  await mongooseConnect();

  const { id } = context.query;
  const product = await Product.findById(id);
  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});
  const feedbacks = await Feedback.find({ _id: { $in: product.feedback } });
  const users = await User.find({});
  const products = await Product.find({});
  const orders = await MyOrder.find({});
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
      id: JSON.parse(JSON.stringify(id)),
      feedbacks: JSON.parse(JSON.stringify(feedbacks)),
      users: JSON.parse(JSON.stringify(users)),
      products: JSON.parse(JSON.stringify(products)),
      orders: JSON.parse(JSON.stringify(orders)),
    },
  };
}

export default function ProductPage({
  products,
  product,
  categories,
  subcategories,
  id,
  feedbacks: initialFeedbacks,
  users,
  toggleTheme,
  darkTheme,
  orders
}) {
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();
  const { showCart, handleShowCartClick } = useCart();

  const [feedbacks, setFeedbacks] = useState(initialFeedbacks);

  const totalRating = feedbacks.reduce(
    (total, feedback) => total + feedback.rate,
    0
  );

  const averageRating =
    feedbacks.length > 0 ? totalRating / feedbacks.length : 0.0;

  const addNewFeedback = async (newFeedback) => {
    try {
      const response = await axios.post("/api/feedback", newFeedback);
      if (response.status === 200) {
        // Update feedbacks state with the new feedback
        setFeedbacks([...feedbacks, newFeedback]);
      }
    } catch (error) {
      console.error("Error adding feedback:", error);
    }
  };

  return (
    <>
      <Center>
        <Container>
          <Header categories={categories} subcategories={subcategories} toggleTheme={toggleTheme} darkTheme={darkTheme}/>
          <LogoWithoutPurple darkTheme={darkTheme}/>
          <Urls page={product.productName}   darkTheme={darkTheme}/>

          <ColWrapper>
            <ProductImages images={product.images} />
            <ProductDesc>
              <b>{product.productName}</b>
              <br />
              {subcategories.map((subcat) => {
                if (subcat._id == product.subcategory) {
                  return (
                    <StyledDiv key={subcat._id}>
                      {subcat.subCategoryName} , {product.schoolClass}
                    </StyledDiv>
                  );
                }
                return null;
              })}
              <>
                <StyledDiv>
                  <Rating value={averageRating} size="small" readOnly  />{" "}
                  <TextLeft>
                    {product.feedback.length} <Purple>відгуків</Purple>
                  </TextLeft>
                </StyledDiv>
              </>
              Формат файлу:{" "}
              <Purple>{getFileExtension(product?.file[0]?.name)}</Purple>
              <br />
              Кількість сторінок/слайдів: <Purple>{product.pages}</Purple>
              <StyledDesc>{product.description}</StyledDesc>
              <GreenPrice darkTheme={darkTheme}>{product.price} ГРН</GreenPrice>
              <DivInline>
                <BuyButton product={product} darkTheme={darkTheme}/>
              </DivInline>
            </ProductDesc>
            <AddFeedback id={id} addFeedback={addNewFeedback} darkTheme={darkTheme} products={products} orders={orders}/>
            <ShowFeedbacks
              product={product}
              feedbacks={feedbacks}
              users={users}
              darkTheme={darkTheme}
            />
          </ColWrapper>
        </Container>
      </Center>
    </>
  );
}
const Container = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const ColWrapper = styled.div`
  display: grid;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 0px;
    align-items: center;
  }
  @media only screen and (min-width: 600px) {
    grid-template-columns: 0.8fr 1.2fr;
    gap: 40px;
    margin-top: 25px;
  }
`;

const Purple = styled.span`
  color: #7469b6;
  margin-left: 6px;
  font-weight: 700;
 
`;

const GreenPrice = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: bolder;
  font-size: 19px;
  line-height: 20px;
  margin-top: 50px;
  margin-left: 190px;
  
  color: ${(props) => (props.darkTheme ? "#37EA7A" : "#327a4c")};
  @media only screen and (max-width: 600px) {
    margin-left: 130px;
    margin-top: 50px;
  }
`;

const DivInline = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const TextLeft = styled.span`
  margin-left: 10px;
  @media only screen and (max-width: 600px) {
    margin-left: 20px;
  }
`;

const ProductDesc = styled.div`
  @media only screen and (max-width: 600px) {
    grid-column: 1 / -1;
    width: 90%;
    margin: 0 auto;
    margin-top: 15px;
  }

  @media only screen and (min-width: 600px) {
    grid-column: 2;
    width: 100%;
  }
`;

const StyledDiv = styled.div`
  width: 100%;
  margin-bottom: 15px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

const StyledDesc = styled.p`
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-wrap: break-word;
  }
`;
