import React, { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext({
  cartProducts: [],
  addToCart: () => {},
  deleteProductFromCart: () => {},
});

export function CartContextProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartProducts(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

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
    <CartContext.Provider
      value={{ cartProducts, addToCart, deleteProductFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
