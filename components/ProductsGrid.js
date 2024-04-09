import styled from "styled-components"
import Center from "./Center";
import Product from "./Product";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding: 25px;

`

export default function ProductsGrid({products}){
    return (
        <Center>
            <StyledProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <Product {...product}/>
                ))}
            </StyledProductsGrid>
        </Center>

    )
}