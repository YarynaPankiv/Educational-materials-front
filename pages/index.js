import Logo from '@/components/Logo/Logo';
import ProductsGrid from '@/components/Product/ProductsGrid';
import ButtonsForPages from '@/components/Buttons/ButtonsForPages';
import { mongooseConnect } from '@/lib/mongoose';
import ProductBox from '@/components/Product/ProductBox';
import Header from '@/components/Header';
import Buttons from '@/components/Buttons/Buttons';
import { useState } from 'react';
import { Product } from '@/models/Product';
import SubCategory from '@/models/SubCategory';
import { Category } from '@/models/Category';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  await mongooseConnect();

  const allProducts = await Product.find({}, null);

  const categories = await Category.find({});
  const subcategories = await SubCategory.find({});

  return {
    props: {
      allProducts: JSON.parse(JSON.stringify(allProducts)),
      categories: JSON.parse(JSON.stringify(categories)),
      subcategories: JSON.parse(JSON.stringify(subcategories)),
      search: context.query?.search || '',
    },
  };
}

export default function HomePage({
  toggleDarkMode,
  allProducts,
  categories,
  subcategories,
}) {
  const [searchValue, setSearchValue] = useState('');

  const [products, setProducts] = useState(allProducts);
  const [isAll, setIsAll] = useState(allProducts);

  useEffect(() => {
    const prods = allProducts.filter(({ productName }) =>
      productName.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (isAll) {
      setProducts(prods);
      return;
    }

    setProducts(prods.reverse().slice(0, 10));
  }, [searchValue, isAll]);

  const handleRecentlyAddedClick = () => {
    setIsAll(false);
  };

  const handleAllProductsClick = () => {
    setIsAll(true);
  };

  return (
    <div>
      <Header
        toggleDarkMode={toggleDarkMode}
        categories={categories}
        subcategories={subcategories}
        setSearchValue={setSearchValue}
        searchValue={searchValue}
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
