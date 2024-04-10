import { useState } from 'react';
import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ProductsGrid from "@/components/ProductsGrid";
import ButtonsForPages from '@/components/ButtonsForPages';


export default function HomePage({ toggleDarkMode }) {
    const originalProducts = ([
        {
            id: 1,
            name: "Назва продукту 1",
            image: "/image.png",
            price: 100,
            description: "Опис продукту 1"
        },
        {
            id: 2,
            name: "Назва продукту 2",
            image: "/image.png",
            price: 200,
            description: "Опис продукту 2"
        },
        { id: 3,
          name: "Назва продукту 3",
          image: "/image.png",
          price: 200,
          description: "Опис продукту 2"},

          { id: 4,
            name: "Назва продукту 4",
            image: "/image.png",
            price: 200,
            description: "Опис продукту 2"}
            ,

          { id: 5,
            name: "Назва продукту 5",
            image: "/image.png",
            price: 200,
            description: "Опис продукту 2"},

            { id: 6,
              name: "Назва продукту 6",
              image: "/image.png",
              price: 200,
              description: "Опис продукту 2"},

              { id: 7,
                name: "Назва продукту 7",
                image: "/image.png",
                price: 200,
                description: "Опис продукту 2"},

                { id: 8,
                  name: "Назва продукту 8",
                  image: "/image.png",
                  price: 200,
                  description: "Опис продукту 2"},

                  { id: 9,
                    name: "Назва продукту 9",
                    image: "/image.png",
                    price: 200,
                    description: "Опис продукту 2"}
    ]);
    const [products, setProducts] = useState(originalProducts);

    const handleRecentlyAddedClick = () => {
        const sortedProducts = originalProducts.sort((a, b) => b.id - a.id);
        const recentlyAdded = sortedProducts.slice(0, 10);
        setProducts(recentlyAdded);
        setCurrentPage(1); }
    
    const handleAllProductsClick = () => {
        setProducts(originalProducts);
        setCurrentPage(1);
    }
    

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
            <Header toggleDarkMode={toggleDarkMode}/>
            <Logo />
            <Buttons onRecentlyAddedClick={handleRecentlyAddedClick} onAllClick={handleAllProductsClick} />
            <ProductsGrid products={displayedProducts} />
            <ButtonsForPages totalPages={totalPages} onPageChange={handlePageChange} currentPage={currentPage} />
           

        </div>
    );
}
    
