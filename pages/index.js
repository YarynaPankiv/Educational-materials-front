import { useState } from 'react';
import Buttons from "@/components/Buttons";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ProductsGrid from "@/components/ProductsGrid";

export default function HomePage() {
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
    ]);
    const [products, setProducts] = useState(originalProducts);

    const handleRecentlyAddedClick = () => {
        const sortedProducts = originalProducts.sort((a, b) => b.id - a.id);
        const recentlyAdded = sortedProducts.slice(0, 10);
        setProducts(recentlyAdded);
    };

    const handleAllProductsClick = () => {
      setProducts(originalProducts);
    }

    return (
        <div>
            <Header />
            <Logo />
            <Buttons onRecentlyAddedClick={handleRecentlyAddedClick} onAllClick={handleAllProductsClick} />
            <ProductsGrid products={products} />
        </div>
    );
}
