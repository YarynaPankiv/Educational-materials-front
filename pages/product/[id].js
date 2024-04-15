import React from 'react';
import Center from "@/components/Center";
import Header from "@/components/Header";
import LogoWithoutPurple from "@/components/LogoWithoutPurple";
import { originalProducts } from "@/pages/index";
import { useRouter } from 'next/router';
import ProductImages from '@/components/ProductImages';
import styled from "styled-components"
import AddFeedback from '@/components/AddFeedback';
const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: .8fr 1.2fr;
  gap: 40px;
  margin-top: 25px;
`
export default function ProductPage() {
    const router = useRouter();
    const { id } = router.query;
    const product = findProductById(id);

    return (
        <>
            <Header />
            <Center>
                
                <LogoWithoutPurple />
                <ColWrapper>
                <ProductImages images={product.images}/>
                <div>
                <p>{product.productName}</p>
                <p>{product.description}</p>
                </div>
                <AddFeedback />

                
                
                </ColWrapper>
                
            </Center>
        </>
    );
}


function findProductById(id) {
    if (!id || typeof id !== 'string') {
        console.error('Invalid id:', id);
        return null;
    }
    const parsedId = parseInt(id, 10);
    const product = originalProducts.find(product => product._id === parsedId);
    return product;
}
