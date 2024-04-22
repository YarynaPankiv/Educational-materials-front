import React, { createContext, useState, useContext } from 'react';

// Створюємо контекст
export const CartContext = createContext();

// Створюємо компонент, який буде надавати стан та функцію
export const ShowCartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  // Функція handleShowCartClick
  const handleShowCartClick = () => {
    setShowCart(prevState => !prevState);
    console.log("Cart clicked");
  };

  // Передаємо стан та функцію через контекст
  return (
    <CartContext.Provider value={{ showCart, handleShowCartClick }}>
      {children}
    </CartContext.Provider>
  );
};

// Створюємо власний хук для спрощеного доступу до контексту
export const useCart = () => useContext(CartContext);
