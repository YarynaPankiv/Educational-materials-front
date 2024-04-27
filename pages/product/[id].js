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
import ShowShoppingCart from "@/components/ShoppingCart";
import BuyButton from "@/components/Buttons/BuyButton";
import { useState } from "react";
import axios from "axios";
import { CartContext } from "@/Contexts/CartContext";
import { useContext } from "react";
import CartDropDownWrap from "@/components/DropDowns/CartDropDown";
import { ShowCartProvider } from "@/Contexts/ShowCart";
import { useCart } from "@/Contexts/ShowCart";
import Urls from "@/components/Urls";
import { useAuth } from "@/Contexts/AccountContext";
import { User } from "@/models/User";

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 25px;
  @media only screen and (min-width: 600px) {
    grid-template-columns: 1fr;
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
  color: #327a4c;
`;
const DivInline = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const TextLeft = styled.div`
  margin-left: 10px;
`;
const ProductDesc = styled.div`

  @media only screen and (max-width: 600px) {
    
    grid-column: 1 / -1; 
  }
`;
const StyledDesc = styled.p`
  @media only screen and (max-width: 600px) {
    width: 90%;
    overflow-wrap: break-word;
  }
`;
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
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
      id: JSON.parse(JSON.stringify(id)),
      feedbacks: JSON.parse(JSON.stringify(feedbacks)),
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}

export default function ProductPage({
  product,
  categories,
  subcategories,
  id,
  feedbacks,
  users,
}) {
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();
  const { showCart, handleShowCartClick } = useCart();

  const totalRating = feedbacks.reduce(
    (total, feedback) => total + feedback.rate,
    0
  );

  const averageRating =
    feedbacks.length > 0 ? totalRating / feedbacks.length : 0.0;

  return (
    <>
      <Center>
        <Header categories={categories} subcategories={subcategories} />
        <LogoWithoutPurple />
        <Urls page={product.productName} />

        <ColWrapper>
          <ProductImages images={product.images} />
          <ProductDesc>
            <b>{product.productName}</b>
            {subcategories.map((subcat) => {
              if (subcat._id == product.subcategory) {
                return (
                  <div key={subcat._id}>
                    {subcat.subCategoryName} , {product.schoolClass}
                  </div>
                );
              }
              return null;
            })}

            <>
              <Rating value={averageRating} size="small" readOnly />{" "}
              <TextLeft>
                {product.feedback.length} <Purple>відгуків</Purple>
              </TextLeft>
            </>
            <br />
            <div>
              <div>
                Формат файлу:{" "}
                <Purple>{getFileExtension(product?.file[0]?.name)}</Purple>
              </div>
              <div>
                Кількість сторінок/слайдів: <Purple>{product.pages}</Purple>
              </div>
              <StyledDesc>{product.description}</StyledDesc>
              {console.log(product.description)}
              <GreenPrice>{product.price} ГРН</GreenPrice>
            </div>
            {console.log(product)}
            <DivInline>
              <BuyButton product={product}></BuyButton>
            </DivInline>
            <AddFeedback id={id} />
          <ShowFeedbacks
            product={product}
            feedbacks={feedbacks}
            users={users}
          />
          </ProductDesc>
          
          
        </ColWrapper>
      </Center>
    </>
  );
}
