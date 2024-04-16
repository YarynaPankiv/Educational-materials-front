import Logo from "@/components/Logo";
import ProductsGrid from "@/components/ProductsGrid";
import ButtonsForPages from "@/components/ButtonsForPages";
import { mongooseConnect } from "@/lib/mongoose";
import ProductBox from "@/components/ProductBox";
import Header from "@/components/Header";
import Buttons from "@/components/Buttons";
import { useState } from "react";
import { Product } from "@/models/Product";

export async function getServerSideProps(){
  await mongooseConnect();
  const allProducts = await Product.find({}, null );
  const recentProducts = await Product.find({}, null, {sort: {'_id': -1}, limit: 10})

  return{
    props:{
      recentProducts:JSON.parse(JSON.stringify(recentProducts)),
      allProducts:JSON.parse(JSON.stringify(allProducts)),
    },
  };
}




export default function HomePage({ toggleDarkMode, allProducts, recentProducts}) {
  const [products, setProducts] = useState(allProducts);
  const handleRecentlyAddedClick = () => {
    setProducts(recentProducts);
    setCurrentPage(1);
  };
  const handleAllProductsClick = () => {
    setProducts(allProducts);
    setCurrentPage(1);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  const categorizedProducts = allProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    if (!acc[product.category].includes(product.subcategory)) {
      acc[product.category].push(product.subcategory);
    }
    return acc;
  }, {});
  return (
    <div>
      <Header
        toggleDarkMode={toggleDarkMode}
        categories={categorizedProducts}
      />
      <Logo />
      <Buttons
        onRecentlyAddedClick={handleRecentlyAddedClick}
        onAllClick={handleAllProductsClick}
      />
      <ProductsGrid products={displayedProducts} />
      <ButtonsForPages
        totalPages={totalPages}
        onPageChange={handlePageChange}
        currentPage={currentPage}
      />
    </div>
  );
}

