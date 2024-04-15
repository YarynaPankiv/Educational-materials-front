import { useState } from "react";
import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ProductsGrid from "@/components/ProductsGrid";
import ButtonsForPages from "@/components/ButtonsForPages";
import { mongooseConnect } from "@/components/lib/mongoose";
import Product from "@/components/Product";

// export const originalProducts = [
//   {
//     id: 1,
//     name: "Назва продукту 1",
//     image: "/image.png",
//     images: ["/image.png", "/img2.png", "/img3.jpg"],
//     price: 100,
//     description:
//       "Ця презентація призначена для учнів 8-го класу з предмету Українська мова. Вона створена з метою розширення знань учнів про прикметники - важливу частину мови, що допомагає у точному та виразному описі об'єктів, явищ, та людей. ",
//     category: "шкільні",
//     subcategory: "Українська мова",
//   },
//   {
//     id: 2,
//     name: "Назва продукту 2",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "університетські",
//     subcategory: "Дослідження операції",
//   },
//   {
//     id: 3,
//     name: "Назва продукту 3",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "шкільні",
//     subcategory: "Математика",
//   },
//   {
//     id: 4,
//     name: "Назва продукту 4",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "університетські",
//     subcategory: "Програмування",
//   },
//   {
//     id: 5,
//     name: "Назва продукту 5",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "університетські",
//     subcategory: "Програмування",
//   },

//   {
//     id: 6,
//     name: "Назва продукту 6",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "університетські",
//     subcategory: "Програмування",
//   },
//   {
//     id: 7,
//     name: "Назва продукту 7",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "університетські",
//     subcategory: "Програмування",
//   },
//   {
//     id: 8,
//     name: "Назва продукту 8",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "шкільні",
//     subcategory: "Математика",
//   },
//   {
//     id: 9,
//     name: "Назва продукту 9",
//     image: "/image.png",
//     price: 200,
//     description: "Опис продукту 2",
//     category: "шкільні",
//     subcategory: "Математика",
//   },
// ];

export const originalProducts = GetProduct();
 async function GetProduct(){
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {sort: {'_id':-1},limit:10});

  return{
    props:{
      newProducts:JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
export default function HomePage({ toggleDarkMode }) {
  const [products, setProducts] = useState(originalProducts);

  const handleRecentlyAddedClick = () => {
    const sortedProducts = originalProducts.sort((a, b) => b.id - a.id);
    const recentlyAdded = sortedProducts.slice(0, 10);
    setProducts(recentlyAdded);
    setCurrentPage(1);
  };

  const handleAllProductsClick = () => {
    setProducts(originalProducts);
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

  const categorizedProducts = originalProducts.reduce((acc, product) => {
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
