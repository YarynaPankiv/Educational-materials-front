import styled from "styled-components"
import Center from "./Center";
import Product from "./Product";

const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 37px;
    margin-bottom: 25px;
    

`

export default function ProductsGrid({products}){
    return (
        <Center>
            <StyledProductsGrid>
                {products?.length > 0 && products.map(product => (
                    <Product key={product._id} {...product}/>
                ))}
            </StyledProductsGrid>
        </Center>

    )
}
