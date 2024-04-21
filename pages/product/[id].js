import React from "react";
import Center from "@/components/Center";
import Header from "@/components/Header";
import LogoWithoutPurple from "@/components/LogoWithoutPurple";
import { originalProducts } from "@/pages/index";
import { useRouter } from "next/router";
import ProductImages from "@/components/ProductImages";
import styled from "styled-components";
import AddFeedback from "@/components/AddFeedback";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import ShowFeedbacks from "@/components/ShowFeedbacks";
import { Feedback } from "@/models/Feedback";
import { Rating } from "@mui/material";
import ShoppingCart from "@/components/ShoppingCart";
import CartDropDownWrap from "@/components/CartDropDown";
import Cart from "@/components/headerComponents.js/cart";
import BuyButton from "@/components/BuyButton";


const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 40px;
  margin-top: 25px;
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
  margin-left: 200px;
  color: #327a4c;
`;
const DivInline = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
const PurpleButton = styled.button`
  background-color: #7469b6;
  font-family: "Rubik Mono One";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  border: none;
  color: #fffcfc;
  height: 50px;
  width: 200px;
  background: #ad88c6;
  border-radius: 10px;
  margin-left: 140px;
  border: none;
  cursor: pointer;
  transition: background-color 0.5s ease;
  &:hover {
    background-color: #7469b6;
    border: none;
  }
`;

const TextLeft = styled.div`
  margin-left: 10px;
`;
const getFileExtension = (fileName) => {
  if (fileName) {
    return fileName.split(".").pop();
  }
  return;
};
function openCart() {
  console.log("cart");
}
export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;

  const product = await Product.findById(id);
  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});
  const feedbacks = await Feedback.find({ _id: { $in: product.feedback } });

  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
      id: JSON.parse(JSON.stringify(id)),
      feedbacks: JSON.parse(JSON.stringify(feedbacks)),
    },
  };
}

export default function ProductPage({
  product,
  categories,
  subcategories,
  id,
  feedbacks,
}) {

  const totalRating = feedbacks.reduce(
    (total, feedback) => total + feedback.rate,
    0
  );

  // Обчислюємо середній рейтинг
  const averageRating =
    feedbacks.length > 0 ? totalRating / feedbacks.length : 0.0;



  return (
    <>
      <Center>
        <Header categories={categories} subcategories={subcategories} />
        <LogoWithoutPurple />
        <ColWrapper>
          <ProductImages images={product.images} />
          <div>
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

            <DivInline>
              <Rating value={averageRating} size="small" readOnly />{" "}
              <TextLeft>{product.feedback.length}</TextLeft>{" "}
              <Purple>відгуків</Purple>
            </DivInline>
            <br />
            <div>
              <div>
                Формат файлу:{" "}
                <Purple>{getFileExtension(product?.file[0]?.name)}</Purple>
              </div>
              <div>
                Кількість сторінок/слайдів: <Purple>{product.pages}</Purple>
              </div>
              <p>{product.description}</p>
              <GreenPrice>{product.price} ГРН</GreenPrice>
            </div>
            <DivInline>
              <ShoppingCart
                icon={<BuyButton></BuyButton>}
                product={product}
              ></ShoppingCart>
            </DivInline>
          </div>
          <AddFeedback id={id} />
          <ShowFeedbacks product={product} feedbacks={feedbacks} />
        </ColWrapper>
      </Center>
    </>
  );
}
