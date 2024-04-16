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
    return fileName.split('.').pop();
}

export default function ProductPage({product}) {

    return (
        <>
            <Header />
            <Center>
                
                <LogoWithoutPurple />
                <ColWrapper>
                <ProductImages images={product.images}/> 
                <div>
                <b>{product.productName}</b>
                <br></br>
                <div>
                <p>Формат файлу: <Purple>{getFileExtension(product.file[0].name)}</Purple></p>
                <p>
                Кількість сторінок/слайдів: <Purple>{product.pages}</Purple>
                <p>{product.description}</p>
                </p>
                </div>
                </div>
                <AddFeedback />
                </ColWrapper>
                
            </Center>
        </>
    );
}


export async function getServerSideProps(context){
   await mongooseConnect();
   const {id} = context.query;
   const product = await Product.findById(id)
   return{
    props: {
        product: JSON.parse(JSON.stringify(product)),
    }
   }
}
