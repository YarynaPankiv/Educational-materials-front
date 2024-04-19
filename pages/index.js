import Logo from "@/components/Logo";
import ProductsGrid from "@/components/ProductsGrid";
import ButtonsForPages from "@/components/ButtonsForPages";
import { mongooseConnect } from "@/lib/mongoose";
import ProductBox from "@/components/ProductBox";
import Header from "@/components/Header";
import Buttons from "@/components/Buttons";
import { useState } from "react";
import { Product } from "@/models/Product";
import SubCategory from "@/models/SubCategory";
import { Category } from "@/models/Category";
import { useEffect } from "react";

export async function getServerSideProps() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null);
  const recentProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 10,
  });
  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});

  return {
    props: {
      recentProducts: JSON.parse(JSON.stringify(recentProducts)),
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
    },
  };
}

export default function HomePage({
  toggleDarkMode,
  allProducts,
  recentProducts,
  categories,
  subcategories,
}) {
  console.log(categories);
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

  return (
    <div>
      <Header
        toggleDarkMode={toggleDarkMode}
        categories={categories}
        subcategories={subcategories}
      />
      <Logo />
      <Buttons
        onRecentlyAddedClick={handleRecentlyAddedClick}
        onAllClick={handleAllProductsClick}
      />
      <ProductsGrid products={products} />
    </div>
  );
}
