// CartContext.js

import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext({
  cartProducts: [] ,
  addToCart: () => {},
  deleteProductFromCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartProducts.findIndex(
        (item) => item._id === product._id
      );
    
      if (existingProductIndex === -1) {
        setCartProducts((prev) => [...prev, product]);
      }
  };

  const deleteProductFromCart = (productId) => {
    const updatedCart = cartProducts.filter(
      (product) => product._id !== productId
    );
    setCartProducts(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cartProducts, addToCart, deleteProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
