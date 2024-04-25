import  { createContext, useContext, useState } from 'react';

const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [showCategories, setShowCategories] = useState(false);
  console.log(showCategories);

  return (
    <CategoriesContext.Provider value={{ showCategories, setShowCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
