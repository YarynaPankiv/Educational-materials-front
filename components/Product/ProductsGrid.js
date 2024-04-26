import styled from "styled-components";
import Center from "../Center";
import Product from "./ProductBox";
import ProductBox from "./ProductBox";
import ButtonsForPages from "../Buttons/ButtonsForPages";
import { useState } from "react";

const StyledProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 37px;
  margin-bottom: 25px;
  @media only screen and (max-width: 605px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export default function ProductsGrid({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  return (
    <Center>
      <StyledProductsGrid>
        {products?.length > 0 &&
          products.map((product) => (
            <ProductBox key={product._id} product={product} />
          ))}
      </StyledProductsGrid>
      <ButtonsForPages
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </Center>
  );
}
