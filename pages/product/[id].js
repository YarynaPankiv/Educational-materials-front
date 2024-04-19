import React from 'react';
import Center from "@/components/Center";
import Header from "@/components/Header";
import LogoWithoutPurple from "@/components/LogoWithoutPurple";
import { originalProducts } from "@/pages/index";
import { useRouter } from 'next/router';
import ProductImages from '@/components/ProductImages';
import styled from "styled-components"
import AddFeedback from '@/components/AddFeedback';
import { mongooseConnect } from '@/lib/mongoose';
import { Product } from '@/models/Product';
import { Category } from "@/models/Category";
import SubCategory from "@/models/SubCategory";
import ShowFeedbacks from '@/components/ShowFeedbacks';
import { Feedback } from '@/models/Feedback';
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
  margin-top: 25px;
`
const Purple = styled.span`
    color: #7469B6;
`
const getFileExtension = (fileName) => {
    if (fileName){
        return fileName.split('.').pop();

    }
    return;

}

export async function getServerSideProps(context){
    await mongooseConnect();
    const {id} = context.query;
 
    const product = await Product.findById(id)
    const categories = await Category.find({});
    const subcategories = await SubCategory.find({})
    const feedbacks = await Feedback.find({});
    return {
       props: {
          product: JSON.parse(JSON.stringify(product)),
          categories: JSON.parse(JSON.stringify(categories)),
          subcategories: JSON.parse(JSON.stringify(subcategories)),
          id: JSON.parse(JSON.stringify(id)),
          feedbacks: JSON.parse(JSON.stringify(feedbacks)),
       }
    }
}



export default function ProductPage({product, categories, subcategories, id, feedbacks}) {

    return (
        <>
            <Header categories={categories} subcategories={subcategories}/>
            <Center>
                
                <LogoWithoutPurple />
                <ColWrapper>
                <ProductImages images={product.images}/> 
                <div>
                <b>{product.productName}</b>
                <br></br>
                <div>
  <p>Формат файлу: <Purple>{getFileExtension(product?.file[0]?.name)}</Purple></p>
  <p>Кількість сторінок/слайдів: <Purple>{product.pages}</Purple></p>
  <p>{product.description}</p>
</div>

                </div>
                <AddFeedback id={id}/>
                <ShowFeedbacks product={product} feedbacks={feedbacks}/>
                </ColWrapper>
                
            </Center>
        </>
    );
}



